import KoaRouter from '@koa/router';

export const router = new KoaRouter();

router.get('/', async ctx => {
  ctx.body = 'empty';
});

router.get('/hello', async ctx => {
  ctx.body = 'hello';
});
