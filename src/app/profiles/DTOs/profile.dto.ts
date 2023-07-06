import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import Product from 'src/app/products/entitys/products.entity';
import User from 'src/app/users/entitys/user.entity';

export default class ProfileDto {
  @IsNotEmpty()
  @IsString()
  public firstName: string;

  @IsNotEmpty()
  @IsString()
  public lastName: string;

  @IsNotEmpty()
  @IsString()
  public phone: string;

  @IsNotEmpty()
  @IsString()
  public email: string;

  @Type(() => User)
  public user: User;

  constructor(partial: Partial<Product>) {
    Object.assign(this, partial);
  }
}
