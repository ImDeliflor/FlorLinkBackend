import { IsInt, IsString, MaxLength } from 'class-validator';

export class CreateCargoDto {
  @IsString()
  @MaxLength(100)
  nombre_cargo: string;

  @IsInt()
  id_grupo: number;
}
