import { PartialType } from '@nestjs/mapped-types';
import { CreateAreaProduccionDto } from './create-area_produccion.dto';

export class UpdateAreaProduccionDto extends PartialType(
  CreateAreaProduccionDto,
) {}
