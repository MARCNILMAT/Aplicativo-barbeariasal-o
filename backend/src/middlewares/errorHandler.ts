import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: 'Validation failed',
      issues: err.errors,
    });
  }

  console.error(err);

  return res.status(500).json({
    error: 'Internal Server Error',
    message: err.message,
  });
};
