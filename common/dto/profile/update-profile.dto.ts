import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { UserDto } from '../user/user.dto';

export class UpdateProfileDto {
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
  @Type(() => UserDto)
  public users: UserDto;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  public isActive: boolean;
}
