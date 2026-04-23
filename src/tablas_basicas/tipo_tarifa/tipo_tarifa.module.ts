import { Module } from '@nestjs/common';
import { TipoTarifaService } from './tipo_tarifa.service';
import { TipoTarifaController } from './tipo_tarifa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoTarifa } from './entities/tipo_tarifa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoTarifa])],
  controllers: [TipoTarifaController],
  providers: [TipoTarifaService],
})
export class TipoTarifaModule {}
