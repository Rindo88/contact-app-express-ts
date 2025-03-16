import { NextFunction, Response } from "express";
import { UserRequest } from "../types/user-request-type";
import { ContactCreateRequest, ContactUpdateRequest } from "../models/contact-model";
import ContactService from "../services/contact-service";
import { sendSuccessResponse } from "../utils/response-util";

class ContactController {
  static async create (req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: ContactCreateRequest = req.body as ContactCreateRequest;
      const response = await ContactService.create(req.user!, request);
      sendSuccessResponse(201, res, 'Success Create New Contact', response);
    } catch (error) {
      next(error);
    }
  }

  static async get (req: UserRequest, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const response = await ContactService.get(req.user!, id);
      sendSuccessResponse(200, res, 'Success Get Contact', response);
    } catch (error) {
      next(error)
    }
  }

  static async update (req: UserRequest, res: Response, next:NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const request: ContactUpdateRequest = req.body as ContactUpdateRequest;
      const response = await ContactService.update(req.user!, id, request);
      sendSuccessResponse(200, res, 'Success Updated Contact', response);
    } catch (error) {
      next(error);
    }
  }

  static async delete (req: UserRequest, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const response = await ContactService.delete(req.user!, id);
      sendSuccessResponse(200, res, 'Success Delete Contact', response);
    } catch (error) {
      next(error);
    }
  }
}

export default ContactController;