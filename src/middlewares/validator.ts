import meteorRequestSchemas from '../validators/schemas/meteor-request-schema';
import { Exception } from '../exception/Exception';
import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';

export const validate = (schema: string) => {
  const validator = meteorRequestSchemas[schema];
  // if (!validator) {
  //   throw new Error(`'${schema}' validator does not exist`);
  // }

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.query = await meteorRequestSchemas.validateAsync(req.query);
      next();
    } catch (err) {
      if (err instanceof ValidationError) {
        return next(new Exception(422, err.message));
      } else {
        next(new Exception(500, String(err)));
      }
    }
  };
};