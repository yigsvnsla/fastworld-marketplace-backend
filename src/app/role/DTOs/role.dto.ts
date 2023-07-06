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
  public user: UserDto;

  constructor(partial: Role) {
    Object.assign(this, partial);
  }
}
