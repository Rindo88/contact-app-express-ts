import { User } from "@prisma/client";

type UserResponse = {
  username: string;
  name: string;
  token?: string;
}

type CreateUserRequest = {
  username: string;
  name: string;
  password: string;
}


type LoginUserRequest = {
  username: string;
  password: string;
}

type UpdateUserRequest = {
  name?: string;
  password?: string;
}


const toUserResponse = (user: User): UserResponse => {
  return {
    name: user.name,
    username: user.username
  }
}


export {toUserResponse};
export type {UserResponse, CreateUserRequest, LoginUserRequest, UpdateUserRequest};