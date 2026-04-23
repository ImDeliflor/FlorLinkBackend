import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTipoTarifaDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;
}
