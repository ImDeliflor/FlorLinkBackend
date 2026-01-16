import { IsString, MaxLength } from 'class-validator';

export class CreateTipoContratoDto {
  @IsString()
  @MaxLength(100)
  nombre_tipo_contrato: string;
}
