import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export enum HasLoteEnum {
  SI = 'si',
  NO = 'no',
}

export class ProcesarEntradasAlmacenDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  tipo_documento: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  nro_factura?: string;

  @IsDateString()
  fecha_entrada: string;

  @IsInt()
  cod_producto: number;

  @IsNumber()
  cantidad: number;

  @IsNumber()
  @IsOptional()
  precio_unidad?: number;

  @IsString()
  @IsOptional()
  @MaxLength(400)
  observacion?: string;

  @IsInt()
  created_by: number;

  @IsDateString()
  fecha_factura: string;

  @IsEnum(HasLoteEnum)
  has_lote: HasLoteEnum;

  @IsNumber()
  @IsOptional()
  id_lote?: number;
}
