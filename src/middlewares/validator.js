import schemas from '../validators/schemas/meteor-request-schema.js';
import { Exception } from '../exception/Exception.js';

export const validate = (schema) => {
  // const validator = schemas[schema];
  // if (!validator) {
  //   throw new Error(`'${schema}' validator does not exist`);
  // }

  return async (req, res, next) => {
    try {
      req.query = await schemas.validateAsync(req.query);
      next();
    } catch (err) {
      if (err.isJoi) {
        return next(new Exception(422, err.message));
      }
      next(new Exception(500, err.message));
    }
  };
};