import { User } from "@prisma/client";
import { ContactCreateRequest, ContactResponse, ContactUpdateRequest, SearchContactRequest, toContactResponse } from "../models/contact-model";
import prisma from "../application/database";
import Validation from "../validations/validation";
import ContactValidation from "../validations/contact-validation";
import ResponseError from "../errors/response-error";
import { Pageable } from "../models/paging-model";

class ContactService {
  public static async checkContactExists (username: string, id: number) {
    const contact = await prisma.contact.findUnique({
      where: {
        id,
        username: username
      }
    });

    if(!contact) {
      throw new ResponseError(404, 'Contact Not Found');
    }
    return contact;
  }

  static async create (user: User, req: ContactCreateRequest): Promise<ContactResponse> {
    Validation.validate(ContactValidation.CREATE, req);
    const contact = await prisma.contact.create({
      data: {
        ...req,
        username: user.username
      }
    });

    return toContactResponse(contact);
  }

  static async get (user: User, id: number): Promise<ContactResponse> {
    const contact = await this.checkContactExists(user.username, id);

    return toContactResponse(contact);
  }

  static async update (user: User, id: number, req: ContactUpdateRequest): Promise<ContactResponse> {
    Validation.validate(ContactValidation.UPDATE, req)
    const contact = await this.checkContactExists(user.username, id);

    const updatedContact = await prisma.contact.update({
      where: {
        id,
        username: user.username
      },
      data: {
        ...req
      }
    });

    return toContactResponse(updatedContact);
  }

  static async delete (user: User, id: number): Promise<ContactResponse> {
    const contact = await this.checkContactExists(user.username, id);

    const deleteContact = await prisma.contact.delete({
      where: {
        id,
        username: user.username
      }
    });
    
    return toContactResponse(deleteContact);
  }

  static async search (user: User, req: SearchContactRequest): Promise<Pageable<ContactResponse>> {
    const request = Validation.validate(ContactValidation.SEARCH, req);
    const skip = (request.page -1) * request.size;
    const filters = [];

    if(request.name) {
      filters.push({
        OR: [
          {
            first_name: {
              contains: request.name
            }
          },
          {
            last_name: {
              contains: request.name
            }
          }
        ]
      });
    }

    if(request.email) {
      filters.push({
        email: {
          contains: request.email
        }
      });
    }

    if(request.phone) {
      filters.push({
        phone: {
          contains: request.phone
        }
      });
    }

    const contacts = await prisma.contact.findMany({
      where: {
        username: user.username,
        AND: filters
      },
      take: req.size,
      skip: skip
    });

    const total = await prisma.contact.count({
      where: {
        username: user.username,
        OR: filters
      }
    });

    return {
      data: contacts.map(contact => toContactResponse(contact)),
      paging: {
        current_page: request.page,
        total_page: Math.ceil(total / request.size),
        size: request.size
      }
    }
  }
}

export default ContactService;