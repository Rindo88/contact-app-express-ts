import { NextFunction, Request, Response } from "express";
import UserService from "../services/user-service";
import { CreateUserRequest, LoginUserRequest, UpdateUserRequest } from "../models/user-model";
import { sendSuccessResponse, sendErrorResponse } from "../utils/response-util";
import { UserRequest } from "../types/user-request-type";

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

  static async get (req: UserRequest, res: Response, next: NextFunction) {
    try {
      const response = await UserService.get(req.user!);
      sendSuccessResponse(200, res, 'successfully get user data', response);
    } catch (error) {
      next(error);
    }
  }

  static async update (req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: UpdateUserRequest = req.body as UpdateUserRequest;
      const response = await UserService.update(req.user!, request);
      sendSuccessResponse(200, res, 'successfully update user data', response);
    } catch (error) {
      next(error);
    }
  }

  static async logout (req: UserRequest, res: Response, next: NextFunction) {
    try {
      const response = await UserService.logout(req.user!);
      sendSuccessResponse(200, res, 'success logout', response);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;