import type { NextFunction, Response } from 'express';
import { validationResult } from 'express-validator';
import { normalizeError } from '../../error';

export const validateRequest = (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = errors.array().pop();
    if (error) {
      const { status, ...rest} = normalizeError(error.msg, 400);
      return res.status(status).send(rest);
    }
  }

  next();
};
