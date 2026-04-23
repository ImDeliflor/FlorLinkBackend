import { Module } from '@nestjs/common';
import { TarifaMensualService } from './tarifa_mensual.service';
import { TarifaMensualController } from './tarifa_mensual.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarifaMensual } from './entities/tarifa_mensual.entity';
import { TarifaMensualView } from './entities/tarifa_mensual_view.entity';
import { TarifaMensualServiceView } from './tarifa_mensual_view.service';

@Module({
  imports: [TypeOrmModule.forFeature([TarifaMensual, TarifaMensualView])],
  controllers: [TarifaMensualController],
  providers: [TarifaMensualService, TarifaMensualServiceView],
})
export class TarifaMensualModule {}
