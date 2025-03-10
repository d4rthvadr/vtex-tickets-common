import type { NextFunction, Request, Response } from 'express';
import { NotAuthorizedError } from '../error';
import { getUserContext } from '../utils/jwt';

const jwtSecret: string = process.env.JWT_SECRET!;

export const requireAuth = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  if (!req.user) {
    throw new NotAuthorizedError();
  }

  next();
};

export const currentUser = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const token = req?.session?.jwt;
  if (!token) {
    throw new NotAuthorizedError('Invalid token');
  }

  const curUser = getUserContext(token, jwtSecret);

  req.user = curUser;

  next();
};
