import { Module } from '@nestjs/common';
import { ConsumoCalderaService } from './consumo_caldera.service';
import { ConsumoCalderaController } from './consumo_caldera.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumoCaldera } from './entities/consumo_caldera.entity';
import { ConsumoCalderaView } from './entities/consumo_caldera_view.entity';
import { ConsumoCalderaServiceView } from './consumo_caldera_view.service';

@Module({
  imports: [TypeOrmModule.forFeature([ConsumoCaldera, ConsumoCalderaView])],
  controllers: [ConsumoCalderaController],
  providers: [ConsumoCalderaService, ConsumoCalderaServiceView],
})
export class ConsumoCalderaModule {}
