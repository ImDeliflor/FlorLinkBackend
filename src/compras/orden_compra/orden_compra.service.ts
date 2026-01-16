import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdenCompra } from './orden_compra.entity';
import { Repository } from 'typeorm';
import { CreateOrdenCompraDto } from './dto/create-orden-compra.dto';
import { UpdateOrdenCompraDto } from './dto/update-orden-compra.dto';

@Injectable()
export class OrdenCompraService {
  constructor(
    @InjectRepository(OrdenCompra)
    private ordenCompraRepository: Repository<OrdenCompra>,
  ) {}

  // Obtener las ordenes de compra
  findAll(): Promise<OrdenCompra[]> {
    return this.ordenCompraRepository.find({
      order: { id_orden_compra: 'DESC' },
    });
  }

  // Guardar orden de compra
  async create(createDto: CreateOrdenCompraDto): Promise<OrdenCompra> {
    const nueva_orden_compra = this.ordenCompraRepository.create(createDto);
    return await this.ordenCompraRepository.save(nueva_orden_compra);
  }

  // Modificar una orden de compra
  async update(
    id: number,
    updateDto: UpdateOrdenCompraDto,
  ): Promise<OrdenCompra> {
    const register = await this.ordenCompraRepository.findOne({
      where: { id_orden_compra: id },
    });

    // Validar que el registro exista
    if (!register) {
      throw new NotFoundException(`Registro con id ${id} no encontrado`);
    }

    const updated = Object.assign(register, updateDto);
    return await this.ordenCompraRepository.save(updated);
  }
}
