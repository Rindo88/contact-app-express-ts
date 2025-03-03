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

const toUserResponse = (user: User): UserResponse => {
  return {
    name: user.name,
    username: user.username
  }
}

type LoginUserRequest = {
  username: string;
  password: string;
}

export {toUserResponse};
export type {UserResponse, CreateUserRequest, LoginUserRequest};