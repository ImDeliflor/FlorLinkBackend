import { Module } from '@nestjs/common';
import { CostosFijosService } from './costos_fijos.service';
import { CostosFijosController } from './costos_fijos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostosFijos } from './entities/costos_fijo.entity';
import { CostosFijosView } from './entities/costos_fijo_view.entity';
import { CostosFijosServiceView } from './costos_fijos_view.service';

@Module({
  imports: [TypeOrmModule.forFeature([CostosFijos, CostosFijosView])],
  controllers: [CostosFijosController],
  providers: [CostosFijosService, CostosFijosServiceView],
})
export class CostosFijosModule {}
