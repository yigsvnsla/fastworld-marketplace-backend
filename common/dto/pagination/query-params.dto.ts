import { IsOptional } from 'class-validator';
import { PageOptionsDto } from './page-options.dto';

export class QueryParamsDto extends PageOptionsDto {
  @IsOptional()
  where: { [key: string]: any };

  @IsOptional()
  relations: { [key: string]: any };
}
