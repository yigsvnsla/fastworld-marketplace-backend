import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export type DataSourceOptionsCustom = DataSourceOptions & SeederOptions & TypeOrmModuleOptions