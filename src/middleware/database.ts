import { User } from '@entity/user.entity';
import { Middleware } from 'koa';
import { DataSource } from 'typeorm';

// const dataSource = new DataSource({
//   type: 'mysql',
//   host: 'docker.yongx.icu',
//   port: 3306,
//   username: 'root',
//   password: '12345678',
//   database: 'test',
//   entities: [User],
//   synchronize: true
// });

const dataSource = new DataSource({
  type: 'sqlite',
  database: './dist/index.db',
  entities: [User],
  synchronize: true
});

dataSource
  .initialize()
  .then(() => {
    console.debug('DataSource initialize successfully.');
  }).catch(error => {
    console.error(`Fail to init DataSource, ${error.message}`);
  });

export const database: Middleware = async (ctx, next) => {
  if (!dataSource.isInitialized) {
    ctx.status = 500;
    ctx.message = 'dataSource is not initialized';
    return;
  }

  ctx.state.userRepo = dataSource.getRepository(User);
  await next();
};
