import { IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateTarifaMensualDto {
  @IsNumber()
  id_tipo_tarifa!: number;

  @IsDateString()
  fecha_periodo!: string;

  @IsNumber()
  valor_total_factura!: number;

  @IsNumber()
  valor_unidad_medida!: number;

  @IsDateString()
  fecha_registro!: string;

  @IsNumber()
  created_by!: number;

  @IsOptional()
  @IsNumber()
  valor_porcentual?: number;

  @IsOptional()
  @IsNumber()
  id_centro_costos?: number;
}
