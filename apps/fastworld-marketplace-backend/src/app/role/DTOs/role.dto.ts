import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
} from 'class-validator';
import UserDto from '../../users/DTOs/user.dto';
import Role from '../entity/roles.entity';
import { Relation } from 'typeorm';

export default class RoleDto {
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

  constructor(partial: Role) {
    Object.assign(this, partial);
  }
}
