import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolFamiliar } from './entities/rol_familiar.entity';
import { CreateRolFamiliarDto } from './dto/create-rol_familiar.dto';
import { UpdateRolFamiliarDto } from './dto/update-rol_familiar.dto';

@Injectable()
export class RolFamiliarService {
  constructor(
    @InjectRepository(RolFamiliar)
    private readonly rol_familiar_repository: Repository<RolFamiliar>,
  ) {}

  async create(create_dto: CreateRolFamiliarDto): Promise<RolFamiliar> {
    const rol = this.rol_familiar_repository.create(create_dto);
    return await this.rol_familiar_repository.save(rol);
  }

  async findAll(): Promise<RolFamiliar[]> {
    return await this.rol_familiar_repository.find({
      order: { nombre_rol_familiar: 'ASC' },
    });
  }

  async findOne(id: number): Promise<RolFamiliar> {
    const rol = await this.rol_familiar_repository.findOne({
      where: { id_rol_familiar: id },
    });

    if (!rol) {
      throw new NotFoundException(`rol_familiar con id ${id} no encontrado`);
    }

    return rol;
  }

  async update(
    id: number,
    update_dto: UpdateRolFamiliarDto,
  ): Promise<RolFamiliar> {
    const rol = await this.findOne(id);

    Object.assign(rol, update_dto);

    return await this.rol_familiar_repository.save(rol);
  }

  async remove(id: number): Promise<void> {
    const result = await this.rol_familiar_repository.delete({
      id_rol_familiar: id,
    });

    if (result.affected === 0) {
      throw new NotFoundException(`rol_familiar con id ${id} no encontrado`);
    }
  }
}
