import { dataSourceOptions } from '../../db/data-source';
import * as path from 'node:path';

export default () => ({
  database: {
    ...dataSourceOptions,
    synchronize: false,
    logging: process.env.NODE_ENV === 'development',
    migrations: [path.join(__dirname, '..', 'db', 'migrations', '*{.ts,.js}')],
    autoLoadEntities: true,
  },
});
