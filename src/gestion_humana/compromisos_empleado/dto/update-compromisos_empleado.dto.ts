import { PartialType } from '@nestjs/mapped-types';
import { CreateCompromisoEmpleadoDto } from './create-compromisos_empleado.dto';

export class UpdateCompromisosEmpleadoDto extends PartialType(
  CreateCompromisoEmpleadoDto,
) {}
