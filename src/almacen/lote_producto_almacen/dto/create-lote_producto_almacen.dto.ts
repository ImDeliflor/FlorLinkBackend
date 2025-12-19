import {
  IsInt,
  IsOptional,
  IsString,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateLoteProductoAlmacenDto {
  @IsInt()
  cod_producto?: number;

  @IsOptional()
  @IsString()
  nro_lote?: string;

  @IsOptional()
  @IsDateString()
  fecha_ingreso?: string; // timestamp

  @IsOptional()
  @IsDateString()
  fecha_vencimiento?: string; // date

  @IsOptional()
  @IsInt()
  id_laboratorio?: number;

  @IsOptional()
  @IsString()
  categoria_toxicologica?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 1 })
  cantidad_disponible_lote?: number;
}
