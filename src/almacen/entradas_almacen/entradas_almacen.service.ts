import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntradasAlmacen } from './entities/entradas_almacen.entity';
import { CreateEntradasAlmacenDto } from './dto/create-entradas_almacen.dto';
import { UpdateEntradasAlmacenDto } from './dto/update-entradas_almacen.dto';

@Injectable()
export class EntradasAlmacenService {
  constructor(
    @InjectRepository(EntradasAlmacen)
    private entradasRepo: Repository<EntradasAlmacen>,
  ) {}

  async create(dto: CreateEntradasAlmacenDto): Promise<EntradasAlmacen> {
    const entrada = this.entradasRepo.create(dto);
    return this.entradasRepo.save(entrada);
  }

  async findAll(): Promise<EntradasAlmacen[]> {
    return this.entradasRepo.find({
      order: { id_entrada_almacen: 'DESC' },
    });
  }

  async findOne(id: number): Promise<EntradasAlmacen> {
    const entrada = await this.entradasRepo.findOne({
      where: { id_entrada_almacen: id },
    });

    if (!entrada) {
      throw new NotFoundException(`Entrada almacen con ID ${id} no existe`);
    }

    return entrada;
  }

  async update(
    id: number,
    dto: UpdateEntradasAlmacenDto,
  ): Promise<EntradasAlmacen> {
    const entrada = await this.findOne(id); // lanza NotFound si no existe

    // Asignar sólo las propiedades que vienen en dto
    Object.assign(entrada, dto);

    return this.entradasRepo.save(entrada);
  }

  async remove(id: number): Promise<void> {
    const result = await this.entradasRepo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Entrada almacen con ID ${id} no existe`);
    }
  }
}
