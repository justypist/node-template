import { Middleware } from 'koa';

export const logger: Middleware = async (ctx, next) => {
  console.log('ctx.url', ctx.url);
  next();
};
