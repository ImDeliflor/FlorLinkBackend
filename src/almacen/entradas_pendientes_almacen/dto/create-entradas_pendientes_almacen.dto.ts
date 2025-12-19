import {
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateEntradasPendientesAlmacenDto {
  @IsNumber()
  @IsNotEmpty()
  cod_producto: number;

  @IsNumber()
  @IsNotEmpty()
  cantidad_a_registrar: number;

  @IsDateString()
  @IsOptional()
  fecha_registro: Date;
}
