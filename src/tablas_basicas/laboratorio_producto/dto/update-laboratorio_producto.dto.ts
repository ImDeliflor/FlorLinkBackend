import { PartialType } from '@nestjs/mapped-types';
import { CreateLaboratorioProductoDto } from './create-laboratorio_producto.dto';

export class UpdateLaboratorioProductoDto extends PartialType(CreateLaboratorioProductoDto) {}
