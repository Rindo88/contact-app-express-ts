import { Response } from "express";

const sendSuccessResponse = (code: number, res: Response, message: string, data: any) => {
  res.status(code).send({
    status: 'success',
    message: message,
    data: data
  });
};

const sendErrorResponse = (code: number, res: Response, message: string, errors: any) => {
  res.status(code).send({
    status: 'failed',
    message: message,
    errors: errors
  }).end();
};

export { sendErrorResponse, sendSuccessResponse };
