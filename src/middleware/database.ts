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
    console.debug('datasource initialize successully');
  }).catch(error => {
    console.error(error);
  });

export const database: Middleware = async (ctx, next) => {
  ctx.state.userRepo = dataSource.getRepository(User);
  await next();
};
