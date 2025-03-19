import { Contact, User } from "@prisma/client";
import { AddressCreateRequest, AddressDeleteRequest, AddressGetRequest, AddressResponse, AddressUpdateRequest, toAddressResponse } from "../models/address-model";
import Validation from "../validations/validation";
import AddressValidation from "../validations/address-validation";
import ContactService from "./contact-service";
import prisma from "../application/database";
import ResponseError from "../errors/response-error";

class AddressService {
  public static async checkAddressExists (address_id: number, contact_id: number) {
    const address = await prisma.address.findFirst({
      where: {
        id: address_id,
        contact_id
      }
    });

    if(!address){
      throw new ResponseError(404, 'Contact Address Not Found');
    }

    return address;
  }

  static async create (user: User, req: AddressCreateRequest): Promise<AddressResponse> {
    Validation.validate(AddressValidation.CREATE, req);
    await ContactService.checkContactExists(user.username, req.contact_id);

    const address = await prisma.address.create({
      data: req
    });

    return toAddressResponse(address);
  }

  static async get (user: User, req: AddressGetRequest): Promise<AddressResponse> {
    Validation.validate(AddressValidation.GET, req);
    await ContactService.checkContactExists(user.username, req.contact_id);
    const address = await this.checkAddressExists(req.id, req.contact_id);

    return toAddressResponse(address);
  }

  static async update (user: User, req: AddressUpdateRequest): Promise<AddressResponse> {
    const request = Validation.validate(AddressValidation.UPDATE, req);
    await ContactService.checkContactExists(user.username, request.contact_id);
    await this.checkAddressExists(request.id, request.contact_id);

    const updateAddress = await prisma.address.update({
      where: {
        id: request.id,
        contact_id: request.contact_id
      },

      data: request
    });
    
    return toAddressResponse(updateAddress);
  }

  static async delete (user: User, req: AddressDeleteRequest): Promise<AddressResponse> {
    Validation.validate(AddressValidation.DELETE, req);
    await ContactService.checkContactExists(user.username, req.contact_id);
    await this.checkAddressExists(req.id, req.contact_id);

    const address = await prisma.address.delete({
      where: {
        id: req.id,
        contact_id: req.contact_id
      }
    });

    return toAddressResponse(address);
  }
}


export default AddressService;