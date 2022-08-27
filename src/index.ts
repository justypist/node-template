import 'reflect-metadata';

import { router } from '@controller';
import { database } from '@middleware/database';
import { logger } from '@middleware/logger';
import Koa from 'koa';

const app = new Koa();

app.use(logger);
app.use(database);

app.use(router.routes());

app.listen(2000);
