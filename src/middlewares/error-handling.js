// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).render('error.html', { message: err.message });
};

export const pageNotFoundHandler = (req, res) => res.render('page-not-found.html', { message: 'Page is not found' });