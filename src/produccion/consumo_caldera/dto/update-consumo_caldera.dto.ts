import { PartialType } from '@nestjs/mapped-types';
import { CreateConsumoCalderaDto } from './create-consumo_caldera.dto';

export class UpdateConsumoCalderaDto extends PartialType(
  CreateConsumoCalderaDto,
) {}
