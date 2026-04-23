import { PartialType } from '@nestjs/mapped-types';
import { CreateCostosFijosDto } from './create-costos_fijo.dto';

export class UpdateCostosFijosDto extends PartialType(CreateCostosFijosDto) {}
