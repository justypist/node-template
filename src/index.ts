import { router } from '@controller';
import Koa from 'koa';

const app = new Koa();

app.use(router.routes());

app.listen(2000);
