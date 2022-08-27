import 'reflect-metadata';

import { router } from '@controller';
import { database } from '@middleware/database';
import { logger } from '@middleware/logger';
import Koa from 'koa';
import KoaBodyParser from 'koa-bodyparser';

const app = new Koa();

// 使用koa-body会出现异常, 使用koa-bodyparser替代
app.use(KoaBodyParser());
app.use(logger);
app.use(database);

app.use(router.routes());

app.listen(2000);
