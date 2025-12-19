import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCentroCostoDto {
  @IsNotEmpty()
  @IsString()
  nombre_centro_costos: string;
}
