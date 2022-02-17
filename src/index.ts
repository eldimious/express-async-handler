import { Request, Response, NextFunction } from 'express';

export const asyncWrapper = (fn: any) => (req: Request, res: Response, next: NextFunction, ...args: any[]) => fn(req, res, next, ...args)
  .catch((error: any) => next(error));