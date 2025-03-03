import { User } from "@prisma/client";
import { Request } from "express";


interface UserRequest extends Request {
  user?: User;
}

export type {UserRequest}