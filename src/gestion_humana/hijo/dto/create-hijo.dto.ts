import { IsDateString, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateHijoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  nombre_hijo: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_nacimiento: Date;
}
