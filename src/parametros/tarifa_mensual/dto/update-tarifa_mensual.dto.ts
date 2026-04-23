import { PartialType } from '@nestjs/mapped-types';
import { CreateTarifaMensualDto } from './create-tarifa_mensual.dto';

export class UpdateTarifaMensualDto extends PartialType(
  CreateTarifaMensualDto,
) {}
