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
import { Relation } from 'typeorm';
import { ProfileDto } from '../profile/profile.dto';
import { RoleDto } from '../role/role.dto';

export class UserDto {
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
