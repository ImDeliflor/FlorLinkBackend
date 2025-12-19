import { PartialType } from '@nestjs/mapped-types';
import { CreateEntradasPendientesAlmacenDto } from './create-entradas_pendientes_almacen.dto';

export class UpdateEntradasPendientesAlmacenDto extends PartialType(CreateEntradasPendientesAlmacenDto) {}
