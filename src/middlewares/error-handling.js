// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).render('error.html', { message: err.message });
};

const pageNotFoundHandler = (req, res) => res.render('page-not-found.html', { message: 'Page is not found' });

module.exports = {
  errorHandler,
  pageNotFoundHandler,
};
