import { Module } from '@nestjs/common';
import { TipoContratoService } from './tipo_contrato.service';
import { TipoContratoController } from './tipo_contrato.controller';
import { TipoContrato } from './entities/tipo_contrato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoContrato])],
  controllers: [TipoContratoController],
  providers: [TipoContratoService],
})
export class TipoContratoModule {}
