import express from 'express';
import path from 'node:path';
const __dirname = import.meta.dirname;
import nunjucks from 'nunjucks';
import  meteorsRouter  from './routes/meteors-routers.js';
import  nasaPhotoRouter  from './routes/nasa-photo-router.js';
import { sentryInit } from './middlewares/sentry.js';
import {
  errorHandler,
  pageNotFoundHandler
} from './middlewares/error-handling.js';
import { env } from './config/environment.js';

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

nunjucks.configure(path.resolve(__dirname, 'views'), {
  express: app,
  autoscape: true,
  noCache: false,
  watch: true
});

const Sentry = sentryInit(app);
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(express.json());
app.use(meteorsRouter);
app.use(nasaPhotoRouter);

app.use(Sentry.Handlers.errorHandler());

app.use(errorHandler);
app.use('*', pageNotFoundHandler);

app.set('view engine', 'html');

app.listen(env.PORT, () => {
  console.log('server listens to port 4000');
});
