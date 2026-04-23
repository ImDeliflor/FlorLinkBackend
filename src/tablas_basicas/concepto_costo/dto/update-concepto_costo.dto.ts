import { PartialType } from '@nestjs/mapped-types';
import { CreateConceptoCostoDto } from './create-concepto_costo.dto';

export class UpdateConceptoCostoDto extends PartialType(
  CreateConceptoCostoDto,
) {}
