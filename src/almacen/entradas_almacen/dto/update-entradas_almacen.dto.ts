import { PartialType } from '@nestjs/mapped-types';
import { CreateEntradasAlmacenDto } from './create-entradas_almacen.dto';

export class UpdateEntradasAlmacenDto extends PartialType(CreateEntradasAlmacenDto) {}
