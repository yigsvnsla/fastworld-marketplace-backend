import { OrderBy } from './../../const/page-order-const';
// import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from 'class-transformer';
import { IsInt, IsObject, IsOptional, Max, Min } from 'class-validator';
import { Order } from '../../types/page-meta-parameters.type';

/**
 * todo: create ony string validator to prop "Order"
 */
export class PageOptionsDto {
  @IsOptional()
  @IsObject()
  public readonly order: Order<OrderBy>;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly page?: number = 1;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  readonly take?: number = 10;

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
