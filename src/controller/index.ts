import KoaRouter from '@koa/router';

export const router = new KoaRouter();

router.get('/', async ctx => {
  ctx.body = 'empty';
});
