import Koa from 'koa';

const app = new Koa();

app.use(async ctx => {
  ctx.body = { msg: 'request successfuly' };
});

app.listen(2000);
