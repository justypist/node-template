import 'module-alias/register';
import 'reflect-metadata';

import { router } from '@controller';
import { database } from '@middleware/database';
import { logger } from '@middleware/logger';
import Koa from 'koa';
import KoaBody from 'koa-body';

const app = new Koa();

app.use(KoaBody());
app.use(logger);
app.use(database);

app.use(router.routes());

app.listen(2000);
