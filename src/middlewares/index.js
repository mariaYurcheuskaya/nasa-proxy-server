const validator = require('./validator');
const { pageNotFoundHandler, errorHandler } = require('./error-handling');

module.exports = {
  validator,
  pageNotFoundHandler,
  errorHandler,
};
