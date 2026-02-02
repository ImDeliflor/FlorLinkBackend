import { PartialType } from '@nestjs/mapped-types';
import { CreatePreguntaDto } from './create-pregunta-evaluacion.dto';

export class UpdatePreguntaDto extends PartialType(CreatePreguntaDto) {}
