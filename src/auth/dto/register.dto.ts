import { Transform } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsNumber()
  id_empleado: number;

  @IsEmail()
  email: string;

  @Transform(({ value }: { value: string }) => value?.trim())
  @IsString()
  @MinLength(6)
  password_hash: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  id_rol?: number;
}
