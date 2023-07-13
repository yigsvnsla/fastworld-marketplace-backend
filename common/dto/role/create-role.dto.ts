import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  public type: number;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  public description: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  public name: string;

  constructor(
    partial: CreateRoleDto
  ) {
    Object.assign(this, partial);
  }
}
