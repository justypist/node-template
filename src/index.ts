import { router } from '@controller';
import { logger } from '@middleware/logger';
import Koa from 'koa';

const app = new Koa();

app.use(logger);

app.use(router.routes());

app.listen(2000);
