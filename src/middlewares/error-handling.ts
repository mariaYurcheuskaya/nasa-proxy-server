// eslint-disable-next-line no-unused-vars
import { NextFunction, Request, Response } from 'express';
import { Exception } from '../exception/Exception';

export const errorHandler = (err: Exception, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).render('error.html', { message: err.message });
};

export const pageNotFoundHandler = (req: Request, res: Response) => res.render('page-not-found.html', { message: 'Page is not found' });