import { PageMetaParameters } from '../../types/page-meta-parameters.type';

export default class PageMetaDto {
  // @ApiProperty()
  readonly page: number;

  // @ApiProperty()
  readonly take: number;

  // @ApiProperty()
  readonly itemCount: number;

  // @ApiProperty()
  readonly pageCount: number;

  // @ApiProperty()
  readonly hasPreviousPage: boolean;

  // @ApiProperty()
  readonly hasNextPage: boolean;

  constructor({ pageOptionsDto, itemCount }: PageMetaParameters) {
    this.page = pageOptionsDto.page;
    this.take = pageOptionsDto.take;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}
