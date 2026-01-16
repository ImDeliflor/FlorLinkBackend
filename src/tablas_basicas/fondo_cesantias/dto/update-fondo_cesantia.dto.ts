import { PartialType } from '@nestjs/mapped-types';
import { CreateFondoCesantiasDto } from './create-fondo_cesantia.dto';

export class UpdateFondoCesantiasDto extends PartialType(
  CreateFondoCesantiasDto,
) {}
