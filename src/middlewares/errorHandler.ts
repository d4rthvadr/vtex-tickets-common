import type { NextFunction, Request, Response } from 'express';
import {
  CustomError,
  type ErrorResponse,
  normalizeError,
} from '../error';

/**
 * Error handling middleware for Express applications.
 *
 * @param error - The error object that was thrown.
 * @param _req - The Express request object (unused).
 * @param res - The Express response object.
 * @param _next - The next middleware function in the stack (unused).
 *
 * @returns The response with the appropriate error status and message.
 *
 * This middleware logs the error to the console and then checks if the error
 * is an instance of `CustomError`. If it is, it serializes the error using
 * the `serializeError` method. Otherwise, it normalizes the error message
 * and sets the status to 500 (Internal Server Error).
 *
 * The response is sent with the status code and the serialized or normalized
 * error message.
 */
export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let errorResponse: ErrorResponse;

  if (error instanceof CustomError) {
    errorResponse = error.serializeError();
  } else {
    const errMessage: string = process.env.NODE_ENV === 'dev' ? error.message : 'Something went wrong'; // Hide error message in production
    errorResponse = normalizeError(errMessage, 500);
  }

  const { status, ...rest}: ErrorResponse  = errorResponse;

  return res.status(status).send(rest);
};
