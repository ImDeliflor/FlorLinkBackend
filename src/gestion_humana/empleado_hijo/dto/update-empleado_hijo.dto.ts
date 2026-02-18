import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpleadoHijoDto } from './create-empleado_hijo.dto';

export class UpdateEmpleadoHijoDto extends PartialType(CreateEmpleadoHijoDto) {}
