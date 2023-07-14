import * as path from 'path';
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { DataSource, DataSourceOptions } from 'typeorm';
// import { SeederOptions } from 'typeorm-extension';
import { DataSourceOptionsCustom } from 'types/data-source.type';
// import RoleSeeder from './seeds/role.seed';
// import OwnerSeeder from './seeds/owner.seed';
// import profileFactory from './factories/profile.factory';

// export const DATA_SOURCE_OPTIONS: DataSourceOptions &
//   SeederOptions &
//   TypeOrmModuleOptions = {
//   type: (process.env.DB_TYPE || 'postgres') as any,
//   host: process.env.POSTGRES_HOST || 'localhost',
//   port: parseInt(process.env.POSTGRES_PORT, 10) || 5435,
//   username: process.env.POSTGRES_USER || 'yigs',
//   password: process.env.POSTGRES_PASSWORD || '123abc',
//   database: process.env.POSTGRES_DB || 'market_place_db',
//   synchronize: false,
//   migrationsRun: false,
//   autoLoadEntities: false,
//   dropSchema: false,
//   logging: false,
//   useUTC: true,
//   migrationsTableName: 'migrations',
//   entities: [path.join(__dirname, '..', 'app', '**', '*.entity{.ts,.js}')],
//   migrations: [
//     path.join(__dirname, '..', 'database', 'migrations', '**', '*{.ts,.js}'),
//   ],
//   seeds: [
//     RoleSeeder,
//     OwnerSeeder,
//     // path.join(__dirname, '..', 'database', 'seeds', '**', '*.seed{.ts,.js}'),
//   ],
//   factories: [
//     profileFactory,
//     // path.join(
//     //   __dirname,
//     //   '..',
//     //   'database',
//     //   'factories',
//     //   '**',
//     //   '*.factory{.ts,.js}',
//     // ),
//   ],
// };
export const PRODUCT_SOURCE_OPTIONS: DataSourceOptionsCustom = {
  type: 'sqlite',
  database: '/db/product/product.db.sqlite',
  synchronize: true,
  migrationsRun: true,
  autoLoadEntities: true,
  dropSchema: true,
  logging: true,
  migrationsTableName: 'migrations',
  entities: [

  ],
  migrations: [

  ],
  seeds: [

  ],
  factories: [

  ],
};