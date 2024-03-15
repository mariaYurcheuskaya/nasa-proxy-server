const Sentry = require('@sentry/node');
const { nodeProfilingIntegration } = require('@sentry/profiling-node');
const express = require('express');
const meteorsRouter = require('./routes/meteors-routers');
const nasaPhotoRouter = require('./routes/nasa-photo-router');
const { pageNotFoundHandler, errorHandler } = require('./middlewares');
const { PORT, DNS } = require('./config/environment');

const app = express();

Sentry.init({
  dsn: DNS,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Sentry.Integrations.Express({ app }),
    nodeProfilingIntegration(),
  ],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(express.json());
app.use('/meteors', meteorsRouter);
app.use('/roverPhoto', nasaPhotoRouter);

app.use(Sentry.Handlers.errorHandler());

app.use(errorHandler);
app.use('*', pageNotFoundHandler);

app.listen(PORT, () => {
  console.log('server listens to port 4000');
});
