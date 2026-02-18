import { PartialType } from '@nestjs/mapped-types';
import { CreateRolFamiliarDto } from './create-rol_familiar.dto';

export class UpdateRolFamiliarDto extends PartialType(CreateRolFamiliarDto) {}
