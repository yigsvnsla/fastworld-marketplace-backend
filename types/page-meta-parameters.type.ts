import { QueryParamsDto } from '../common/dto/pagination/query-params.dto';
import { PageOptionsDto } from '../common/dto/pagination/page-options.dto';

export interface PageMetaParameters {
  pageOptionsDto: PageOptionsDto | QueryParamsDto;
  itemCount: number;
}

export type Order<T extends string | number> = {
  [key: string]: T | Order<T> | string;
};
