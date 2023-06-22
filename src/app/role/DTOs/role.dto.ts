import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export default class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  public type: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  public description: string;
}
