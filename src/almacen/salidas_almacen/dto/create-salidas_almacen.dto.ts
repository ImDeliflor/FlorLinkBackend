import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsDateString,
} from 'class-validator';

export class CreateSalidaAlmacenDto {
  @IsDateString()
  fecha_salida: string;

  @IsInt()
  cod_producto: number;

  @IsNumber()
  cantidad: number;

  @IsInt()
  id_centro_costos: number;

  @IsString()
  @IsOptional()
  observacion?: string;

  @IsInt()
  created_by: number;

  @IsInt()
  @IsOptional()
  id_lote_producto: number;

  @IsDateString()
  fecha_aplicacion: string;
}
