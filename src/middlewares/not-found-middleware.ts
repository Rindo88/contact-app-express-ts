import { NextFunction, Request, Response } from "express";
import { sendErrorResponse } from "../utils/response-util";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  sendErrorResponse(404, res, 'Not Found', 'Page Not Found');
};

export default notFound;