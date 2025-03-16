import { User } from "@prisma/client";
import prisma from "../application/database";
import ResponseError from "../errors/response-error";
import { CreateUserRequest, LoginUserRequest, toUserResponse, UpdateUserRequest, UserResponse } from "../models/user-model";
import UserValidation from "../validations/user-validation";
import Validation from "../validations/validation";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

class UserService {
  static async register(req: CreateUserRequest): Promise<UserResponse> {
    const user = Validation.validate(UserValidation.REGISTER, req);
    const totalExistsUsername = await prisma.user.count({
      where: {username: req.username}
    });
    
    if (totalExistsUsername != 0) {
      throw new ResponseError(400, 'username already exists');
    }

    const hashedPassword = await bcrypt.hash(req.password, 10);
    user.password = hashedPassword;

    const register = await prisma.user.create({
      data: user
    });
    return toUserResponse(register)
  }

  static async login (req: LoginUserRequest): Promise<UserResponse> {
    Validation.validate(UserValidation.LOGIN, req);
    const user = await prisma.user.findUnique({
      where: {
        username: req.username
      }
    });
    if(!user){
      throw new ResponseError(401, 'wrong username or password');
    }
    const comparePassword = await bcrypt.compare(req.password, user.password);
    if(!comparePassword){
      throw new ResponseError(401, 'wrong username or password');
    }

    const updateUser = await prisma.user.update({
      where: {
        username: req.username
      },
      data: {
        token: uuid()
      }
    });
    const response = toUserResponse(updateUser);
    response.token = updateUser.token!;
    return response;
  }

  static async get (user: User): Promise<UserResponse> {
    return toUserResponse(user);
  }

  static async update (user: User, req: UpdateUserRequest): Promise<UserResponse> {
    const validationRequest = Validation.validate(UserValidation.UPDATE, req);

    if(validationRequest.name){
      user.name = validationRequest.name;
    }

    if(validationRequest.password){
      user.password = await bcrypt.hash(validationRequest.password, 10)
    }

    const response = await prisma.user.update({
      where: {
        username: user.username
      },
      data: user
    });

    return toUserResponse(response);
  }

  static async logout (user: User): Promise<UserResponse> {
    const response = await prisma.user.update({
      where: {
        username: user.username
      },
      data: {
        token: null
      }
    });
    return toUserResponse(response);
  }
}

export default UserService;