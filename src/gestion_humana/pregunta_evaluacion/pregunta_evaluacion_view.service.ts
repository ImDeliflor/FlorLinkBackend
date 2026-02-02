import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EvaluacionesDesempenioReport } from './pregunta_evaluacion_view.entity';

@Injectable()
export class EvaluacionesDesempenioServiceView {
  constructor(
    @InjectRepository(EvaluacionesDesempenioReport)
    private readonly informeRepo: Repository<EvaluacionesDesempenioReport>,
  ) {}

  // Obtener todo el informe
  async findAll(): Promise<EvaluacionesDesempenioReport[]> {
    return this.informeRepo.find({
      order: { fecha: 'DESC' },
    });
  }

  // Filtrar por evaluado
  async findByEvaluado(id_evaluado: number) {
    return this.informeRepo.find({
      where: { id_evaluado },
      order: { fecha: 'DESC' },
    });
  }

  // Filtrar por evaluador
  async findByEvaluador(id_evaluador: number) {
    return this.informeRepo.find({
      where: { id_evaluador },
      order: { fecha: 'DESC' },
    });
  }

  // Filtrar por grupo
  async findByGrupo(grupo: string) {
    return this.informeRepo.find({
      where: { grupo },
      order: { fecha: 'DESC' },
    });
  }

  // Filtrar por enfoque
  async findByEnfoque(enfoque: string) {
    return this.informeRepo.find({
      where: { enfoque },
      order: { fecha: 'DESC' },
    });
  }
}
