import { IsString, MaxLength } from 'class-validator';

export class CreateMedioTransporteDto {
  @IsString()
  @MaxLength(120)
  nombre_medio_transporte: string;
}
