import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { ConsumoCalderaView } from './entities/consumo_caldera_view.entity';

@Injectable()
export class ConsumoCalderaServiceView {
  constructor(
    @InjectRepository(ConsumoCalderaView)
    private readonly view: Repository<ConsumoCalderaView>,
  ) {}

  async findAll(): Promise<ConsumoCalderaView[]> {
    return this.view.find({ order: { fecha_hora_inicio: 'DESC' } });
  }

  // Función para traer los registros pendientes por llenar de un usuario
  async findPendingToRegister(
    id_usuario: number,
  ): Promise<ConsumoCalderaView[]> {
    return this.view.find({
      order: { id_consumo_caldera: 'ASC' },
      where: {
        created_by: id_usuario,
        fecha_hora_fin: IsNull(),
        reporte_final_medidor: IsNull(),
      },
    });
  }
}
