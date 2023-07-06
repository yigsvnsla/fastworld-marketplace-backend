import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Exclude, Type } from 'class-transformer';
import ProfileDto from '../../../app/profiles/DTOs/profile.dto';
import RoleDto from '../../role/DTOs/role.dto';
import { Relation } from 'typeorm';

export default class UserDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  public id: number;

  @IsNotEmpty()
  @IsString()
  public username: string;

  @Exclude()
  @IsNotEmpty()
  @IsString()
  public password: string;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProfileDto)
  public profile: Relation<ProfileDto>;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Type(() => RoleDto)
  public role: Relation<RoleDto>;

  @IsOptional()
  @IsBoolean()
  public isActive: boolean;

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}
