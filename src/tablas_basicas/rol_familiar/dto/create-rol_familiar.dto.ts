import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateRolFamiliarDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre_rol_familiar: string;
}
