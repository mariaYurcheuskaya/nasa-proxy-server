const express = require('express');
const meteorsRouter = require('./routes/meteors-routers');
const nasaPhotoRouter = require('./routes/nasa-photo-router');
const { pageNotFoundHandler, errorHandler } = require('./middlewares');
const { PORT } = require('./config/environment');

const app = express();

app.use(express.json());
app.use('/meteors', meteorsRouter);
app.use('/roverPhoto', nasaPhotoRouter);

app.use(errorHandler);
app.use('*', pageNotFoundHandler);

app.listen(PORT, () => {
  console.log('server listens to port 4000');
});
