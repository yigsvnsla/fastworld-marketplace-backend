import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import User from 'src/app/users/entitys/user.entity';

export default class UpdateProfileDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  public firstName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  public lastName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  public phone: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @IsOptional()
  @Type(() => User)
  public users: User;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  public isActive: boolean;
}
