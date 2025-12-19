import { PartialType } from '@nestjs/mapped-types';
import { CreateSalidaAlmacenDto } from './create-salidas_almacen.dto';

export class UpdateSalidasAlmacenDto extends PartialType(
  CreateSalidaAlmacenDto,
) {}
