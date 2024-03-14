// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: err.message });
};

const pageNotFoundHandler = (req, res) => res.status(404).json({ message: 'Page not found' });

module.exports = {
  errorHandler,
  pageNotFoundHandler,
};
