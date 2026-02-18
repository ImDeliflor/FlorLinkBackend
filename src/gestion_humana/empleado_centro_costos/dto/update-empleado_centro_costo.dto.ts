import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpleadoCentroCostosDto } from './create-empleado_centro_costo.dto';

export class UpdateEmpleadoCentroCostosDto extends PartialType(
  CreateEmpleadoCentroCostosDto,
) {}
