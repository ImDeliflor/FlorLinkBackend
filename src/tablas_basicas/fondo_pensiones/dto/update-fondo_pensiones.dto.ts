import { PartialType } from '@nestjs/mapped-types';
import { CreateFondoPensionesDto } from './create-fondo_pensiones.dto';

export class UpdateFondoPensionesDto extends PartialType(
  CreateFondoPensionesDto,
) {}
