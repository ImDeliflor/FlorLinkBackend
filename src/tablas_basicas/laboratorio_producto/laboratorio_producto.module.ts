import { Module } from '@nestjs/common';
import { LaboratorioProductoService } from './laboratorio_producto.service';
import { LaboratorioProductoController } from './laboratorio_producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaboratorioProducto } from './entities/laboratorio_producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LaboratorioProducto])],
  controllers: [LaboratorioProductoController],
  providers: [LaboratorioProductoService],
})
export class LaboratorioProductoModule {}
