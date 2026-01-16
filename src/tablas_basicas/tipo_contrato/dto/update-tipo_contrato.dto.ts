import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoContratoDto } from './create-tipo_contrato.dto';

export class UpdateTipoContratoDto extends PartialType(CreateTipoContratoDto) {}
