import { IsString, IsNotEmpty } from 'class-validator';

export class CreateConceptoCostoDto {
  @IsString()
  @IsNotEmpty()
  nombre_concepto_costo!: string;
}
