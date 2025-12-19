import { PartialType } from '@nestjs/mapped-types';
import { CreateLoteProductoAlmacenDto } from './create-lote_producto_almacen.dto';

export class UpdateLoteProductoAlmacenDto extends PartialType(
  CreateLoteProductoAlmacenDto,
) {}
