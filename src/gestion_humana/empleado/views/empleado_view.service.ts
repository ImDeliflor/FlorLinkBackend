// src/empleado/empleado_view.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { EmpleadoView } from './empleado_view.entity';

@Injectable()
export class EmpleadoViewService {
  constructor(
    @InjectRepository(EmpleadoView)
    private readonly empleadoViewRepository: Repository<EmpleadoView>,
  ) {}

  async findByCelular(celular: string): Promise<EmpleadoView | null> {
    return this.empleadoViewRepository.findOne({ where: { celular } });
  }
}
