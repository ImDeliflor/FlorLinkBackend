import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateAreaProduccionDto {
  id_area_produccion?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre_area_produccion: string;

  @IsNumber()
  @IsNotEmpty()
  id_centro_costos: number;
}
