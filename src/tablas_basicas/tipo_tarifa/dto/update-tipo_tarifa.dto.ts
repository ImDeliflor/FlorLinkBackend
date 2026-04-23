import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoTarifaDto } from './create-tipo_tarifa.dto';

export class UpdateTipoTarifaDto extends PartialType(CreateTipoTarifaDto) {}
