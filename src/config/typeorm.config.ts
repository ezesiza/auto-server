import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');
console.log(dbConfig);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',

  // host: process.env.RDS_HOSTNAME || dbConfig.host,
  // port: process.env.RDS_PORT || dbConfig.port,
  // username: process.env.RDS_USERNAME || dbConfig.username,
  // password: process.env.RDS_PASSWORD || dbConfig.password,
  // database: process.env.RDS_DB_NAME || dbConfig.database,
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Corinthians14_',
  database: 'auto-one',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  //synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
  synchronize: true,
};
 