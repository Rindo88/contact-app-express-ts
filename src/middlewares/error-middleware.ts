import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { sendErrorResponse } from "../utils/response-util";
import ResponseError from "../errors/response-error";

const ErrorMiddleware = async (error: Error, req: Request, res: Response, next: NextFunction) => {
  if(error instanceof ZodError){
    sendErrorResponse(400, res, 'username or password is required', error);
  }else if(error instanceof ResponseError) {
    sendErrorResponse(error.code, res, error.message, error);
  }else {
    sendErrorResponse(500, res, 'internal server error', 'server meleduk');
  }
}

export default ErrorMiddleware;