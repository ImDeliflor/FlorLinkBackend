import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEntradasAlmacenDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nro_factura: string;

  @IsNotEmpty()
  fecha_entrada: Date;

  @IsInt()
  cod_producto: number;

  @IsNumber()
  cantidad: number;

  @IsNumber()
  precio_unidad: number;

  @IsString()
  @IsOptional()
  @MaxLength(400)
  observacion?: string;

  @IsInt()
  created_by: number;

  @IsNotEmpty()
  fecha_factura: Date;
}
