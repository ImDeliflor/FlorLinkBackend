import { IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateConsumoCalderaDto {
  id_consumo_caldera?: number;

  @IsDateString()
  fecha_hora_inicio: Date;

  @IsOptional()
  @IsDateString()
  fecha_hora_fin?: Date;

  @IsNumber()
  id_area_produccion: number;

  @IsNumber()
  reporte_inicial_medidor: number;

  @IsOptional()
  @IsNumber()
  reporte_final_medidor?: number;

  @IsDateString()
  fecha_creacion: Date;

  @IsOptional()
  fecha_modificacion?: Date;

  @IsNumber()
  created_by: number;
}
