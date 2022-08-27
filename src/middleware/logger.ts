import { randomUUID } from 'crypto';
import { Middleware } from 'koa';

export const logger: Middleware = async (ctx, next) => {
  const logId = randomUUID();
  console.time(logId);
  console.debug(ctx.request);
  await next();
  console.debug(ctx.response);
  console.timeEnd(logId);
};
