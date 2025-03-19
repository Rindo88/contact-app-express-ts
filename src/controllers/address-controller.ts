import { NextFunction, Response } from "express";
import { UserRequest } from "../types/user-request-type";
import { AddressCreateRequest, AddressDeleteRequest, AddressUpdateRequest } from "../models/address-model";
import AddressService from "../services/address-service";
import { sendSuccessResponse } from "../utils/response-util";

class AddressController {
  static async create (req: UserRequest , res: Response, next: NextFunction) {
    try {
      const request: AddressCreateRequest = req.body as AddressCreateRequest;
      request.contact_id = Number(req.params.id);
      const response = await AddressService.create(req.user!, request);
      sendSuccessResponse(201, res, 'Success Created Address', response)
    } catch (error) {
      next(error);
    }
  }

  static async get (req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request = {
        id: Number(req.params.id),
        contact_id: Number(req.params.contact_id)
      }
      const response = await AddressService.get(req.user!, request);
      sendSuccessResponse(200, res, 'Success Get Address', response);
    } catch (error) {
      next(error);
    }
  }

  static async update (req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: AddressUpdateRequest = req.body as AddressUpdateRequest;
      request.contact_id = Number(req.params.contact_id);
      request.id = Number(req.params.id);
      const response = await AddressService.update(req.user!, request);
      sendSuccessResponse(200, res, 'Success Updated Address Contact', response);
    } catch (error) {
      next(error);
    }
  }

  static async delete (req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: AddressDeleteRequest = {
        id: Number(req.params.id),
        contact_id: Number(req.params.contact_id)
      }

      const response = await AddressService.delete(req.user!, request);
      sendSuccessResponse(200, res, 'Success Deleted Contact Address', response);
    } catch (error) {
      next(error);
    }
  }
}


export default AddressController;