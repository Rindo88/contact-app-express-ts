import { Response, NextFunction } from "express";
import { sendErrorResponse } from "../utils/response-util";
import { UserRequest } from "../types/user-request-type";
import prisma from "../application/database";

const authMiddleware = async (req: UserRequest, res: Response, next: NextFunction) => {
  const token = req.get('ACCESS_TOKEN');

  console.log(`Received token: ${token}`);

  if (token) {
    const user = await prisma.user.findFirst({
      where: {
        token: token
      }
    });

    console.log(`User found: ${JSON.stringify(user)}`);

    if (user) {
      req.user = user;
      console.log('User authenticated, calling next()');
      next();
      return;
    }
  }

  console.log('Unauthorized access, calling sendErrorResponse');
  return sendErrorResponse(401, res, 'Unauthorized', 'Access denied, unauthorized');
}

export default authMiddleware;