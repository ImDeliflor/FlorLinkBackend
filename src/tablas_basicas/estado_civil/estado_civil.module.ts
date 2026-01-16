import { Module } from '@nestjs/common';
import { EstadoCivilService } from './estado_civil.service';
import { EstadoCivilController } from './estado_civil.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoCivil } from './entities/estado_civil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoCivil])],
  controllers: [EstadoCivilController],
  providers: [EstadoCivilService],
})
export class EstadoCivilModule {}
