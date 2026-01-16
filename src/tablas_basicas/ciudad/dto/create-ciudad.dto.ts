import { IsInt, IsString, MaxLength } from 'class-validator';

export class CreateCiudadDto {
  @IsString()
  @MaxLength(100)
  nombre_ciudad: string;

  @IsInt()
  id_departamento: number;
}
