import { User } from "@prisma/client";
import { ContactCreateRequest, ContactResponse, ContactUpdateRequest, toContactResponse } from "../models/contact-model";
import prisma from "../application/database";
import Validation from "../validations/validation";
import ContactValidation from "../validations/contact-validation";
import ResponseError from "../errors/response-error";

class ContactService {
  private static async checkContactExists (username: string, id: number) {
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
}

export default ContactService;