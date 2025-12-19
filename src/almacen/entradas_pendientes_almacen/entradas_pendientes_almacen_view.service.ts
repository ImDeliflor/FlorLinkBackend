import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntradasPendientesAlmacenView } from './entities/entradas_pendientes_almacen_view.entity';

@Injectable()
export class EntradasPendientesAlmacenViewService {
  constructor(
    @InjectRepository(EntradasPendientesAlmacenView)
    private readonly entradasPendientesViewRepo: Repository<EntradasPendientesAlmacenView>,
  ) {}

  async findAll(): Promise<EntradasPendientesAlmacenView[]> {
    return this.entradasPendientesViewRepo.find();
  }

  // Función para traer solo las entradas con estado pendiente
  async findAllPending(): Promise<EntradasPendientesAlmacenView[]> {
    return this.entradasPendientesViewRepo.find({
      where: { estado_entrada: 'Pendiente' },
    });
  }
}
