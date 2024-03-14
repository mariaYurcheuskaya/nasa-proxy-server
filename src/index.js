const express = require('express');
const meteorsRouter = require('./routes/meteors-routers');
const nasaPhotoRouter = require('./routes/nasa-photo-router');
const { PORT } = require('./config/environment');

const app = express();

app.use(express.json());
app.use('/meteors', meteorsRouter);
app.use('/roverPhoto', nasaPhotoRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: err.message });
});

app.use('*', (req, res) => res.status(404).json({ message: 'Page not found' }));

app.listen(PORT, () => {
  console.log('server listens to port 4000');
});
