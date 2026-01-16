import { IsString, MaxLength } from 'class-validator';

export class CreateTipoDocumentoDto {
  @IsString()
  @MaxLength(100)
  nombre_tipo_documento: string;
}
