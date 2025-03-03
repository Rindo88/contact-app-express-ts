import { NextFunction, Request, Response } from "express";
import UserService from "../services/user-service";
import { CreateUserRequest, LoginUserRequest } from "../models/user-model";
import { sendSuccessResponse, sendErrorResponse } from "../utils/response-util";

class UserController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateUserRequest = req.body as CreateUserRequest;
      const response = await UserService.register(request);
      sendSuccessResponse(201, res, 'User registered successfully', response);
    } catch (error) {
      next(error);
    }
  }
  static async login (req: Request, res: Response, next: NextFunction) {
    try {
      const request: LoginUserRequest = req.body as LoginUserRequest;
      const response = await UserService.login(request);
      sendSuccessResponse(200, res, 'login successfully', response);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;