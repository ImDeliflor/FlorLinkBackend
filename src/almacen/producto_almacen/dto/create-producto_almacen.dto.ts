import { IsString, IsInt, IsOptional, IsDateString } from 'class-validator';

export class CreateProductoAlmacenDto {
  @IsOptional()
  @IsInt()
  id_categoria?: number;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  unidad_medida?: string;

  @IsOptional()
  @IsDateString()
  fecha_registro?: string;

  @IsOptional()
  @IsInt()
  id_categoria_costo?: number;
}
