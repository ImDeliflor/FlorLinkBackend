import { PartialType } from '@nestjs/mapped-types';
import { CreateEvaluacionDesempenioDto } from './create-evaluacion-desempenio.dto';

export class UpdateEvaluacionDesempenioDto extends PartialType(
  CreateEvaluacionDesempenioDto,
) {}
