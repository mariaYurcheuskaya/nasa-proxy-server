const express = require('express');
const path = require('node:path');
const nunjucks = require('nunjucks');
const meteorsRouter = require('./routes/meteors-routers');
const nasaPhotoRouter = require('./routes/nasa-photo-router');
const sentryInit = require('./middlewares/sentry');
const { pageNotFoundHandler, errorHandler } = require('./middlewares');
const { PORT } = require('./config/environment');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

nunjucks.configure(path.resolve(__dirname, 'views'), {
  express: app,
  autoscape: true,
  noCache: false,
  watch: true,
});

const Sentry = sentryInit(app);
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(express.json());
app.use('/meteors', meteorsRouter);
app.use('/roverPhoto', nasaPhotoRouter);

app.use(Sentry.Handlers.errorHandler());

app.use(errorHandler);
app.use('*', pageNotFoundHandler);

app.set('view engine', 'html');

app.listen(PORT, () => {
  console.log('server listens to port 4000');
});
