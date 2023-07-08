import QueryParamsDto from '../common/dtos/query-params.dto';
import { PageOptionsDto } from '../common/dtos/page-options.dto';

export interface PageMetaParameters {
  pageOptionsDto: PageOptionsDto | QueryParamsDto;
  itemCount: number;
}

export type Order<T extends string | number> = {
  [key: string]: T | Order<T> | string;
};

// export type Order = {
//   [key: string]: T | NestedKeyValueObject<T>;
// };
