import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import * as path from 'node:path';

config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [path.join('dist', '**', '*.entity{.ts,.js}')],
  migrations: [path.join('dist', 'db', 'migrations', '*{.ts,.js}')],
};

// Use for Typeorm CLI
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
