import { IsDateString, IsNumber } from 'class-validator';

export class CreateCostosFijosDto {
  @IsNumber()
  id_concepto_costo!: number;

  @IsDateString()
  fecha_periodo!: Date;

  @IsNumber()
  valor_total_costo!: number;

  @IsNumber()
  id_centro_costos!: number;

  @IsNumber()
  porc_impacto!: number;

  @IsDateString()
  fecha_registro!: Date;

  @IsNumber()
  created_by!: number;
}
