const schemas = require('../validators/schemas');
const Exception = require('../exception/Exception');

const validate = (schema) => {
  if (!schemas.hasOwnProperty(schema)) {
    throw new Error(`'${schema}' validator does not exist`);
  }

  return async (req, res, next) => {
    try {
      req.query = await schemas[schema].validateAsync(req.query);
      next();
    } catch (err) {
      if (err.isJoi) {
        return next(new Exception(422, err.message));
      }
      next(new Exception(500, err.message));
    }
  };
};

module.exports = validate;