import { IsBoolean, IsString, MaxLength } from 'class-validator';

export class CreateEpsDto {
  @IsString()
  @MaxLength(150)
  nombre_eps: string;

  @IsBoolean()
  estado_eps: boolean;
}
