import * as Sentry from '@sentry/node';
// import { nodeProfilingIntegration } from '@sentry/profiling-node';
import { env } from '../config/environment';
import { Express } from 'express';

export const sentryInit = (app: Express) => {
  Sentry.init({
    dsn: env.DSN,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Sentry.Integrations.Express({ app })
      // nodeProfilingIntegration(),
    ],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0
  });
  return Sentry;
};