import { DataSource, DataSourceOptions } from 'typeorm';

export const DATA_SOURCE_OPTIONS: DataSourceOptions = {
  type: (process.env.DB_TYPE || 'postgres') as any,
  username: process.env.POSTGRES_USER || 'yigs',
  host: process.env.POSTGRES_HOST || 'localhost',
  database: process.env.POSTGRES_DB || 'market_place_db',
  password: process.env.POSTGRES_PASSWORD || '123abc',
  port: parseInt(process.env.POSTGRES_PORT, 10) || 5435,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrationsTableName: 'migrations',
  logging: true,
  migrations: ['src/migrations/*{.ts,.js}'],
};

const dataSource = new DataSource(DATA_SOURCE_OPTIONS);
export default dataSource;
