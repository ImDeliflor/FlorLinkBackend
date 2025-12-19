import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntradasPendientesAlmacen } from './entities/entradas_pendientes_almacen.entity';
import { CreateEntradasPendientesAlmacenDto } from './dto/create-entradas_pendientes_almacen.dto';
import { UpdateEntradasPendientesAlmacenDto } from './dto/update-entradas_pendientes_almacen.dto';

@Injectable()
export class EntradasPendientesAlmacenService {
  constructor(
    @InjectRepository(EntradasPendientesAlmacen)
    private readonly entradasPendientesRepo: Repository<EntradasPendientesAlmacen>,
  ) {}

  async findAll(): Promise<EntradasPendientesAlmacen[]> {
    return this.entradasPendientesRepo.find();
  }

  // Función para traer solo las entradas con estado pendiente
  async findAllPending(): Promise<EntradasPendientesAlmacen[]> {
    return this.entradasPendientesRepo.find({
      where: { estado_entrada: 'Pendiente' },
    });
  }

  async findOne(id: number): Promise<EntradasPendientesAlmacen> {
    const entrada = await this.entradasPendientesRepo.findOne({
      where: { id_entrada_pendiente: id },
    });

    if (!entrada) {
      throw new NotFoundException(
        `Entrada pendiente con id ${id} no encontrada`,
      );
    }

    return entrada;
  }

  async create(
    dto: CreateEntradasPendientesAlmacenDto,
  ): Promise<EntradasPendientesAlmacen> {
    const newEntrada = this.entradasPendientesRepo.create(dto);
    return this.entradasPendientesRepo.save(newEntrada);
  }

  async update(
    id: number,
    dto: UpdateEntradasPendientesAlmacenDto,
  ): Promise<EntradasPendientesAlmacen> {
    const entrada = await this.findOne(id);

    const updated = Object.assign(entrada, dto);
    return this.entradasPendientesRepo.save(updated);
  }

  async remove(id: number): Promise<void> {
    const result = await this.entradasPendientesRepo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(
        `Entrada pendiente con id ${id} no encontrada`,
      );
    }
  }
}
