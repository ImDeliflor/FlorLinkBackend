import { IsInt, IsNumber } from 'class-validator';

export class CreateInventarioAlmacenDto {
  @IsInt()
  cod_producto: number;

  @IsNumber({ maxDecimalPlaces: 1 })
  inventario_actual: number;
}
