import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Relation } from 'typeorm';
import { UserDto } from '../user/user.dto';

export class RoleDto {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  public type: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  public description: string;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @Type(() => UserDto)
  public user: Relation<UserDto>;

  constructor(partial: RoleDto) {
    Object.assign(this, partial);
  }
}
