import { Module } from '@nestjs/common';
import { ConceptoCostoService } from './concepto_costo.service';
import { ConceptoCostoController } from './concepto_costo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConceptoCosto } from './entities/concepto_costo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConceptoCosto])],
  controllers: [ConceptoCostoController],
  providers: [ConceptoCostoService],
})
export class ConceptoCostoModule {}
