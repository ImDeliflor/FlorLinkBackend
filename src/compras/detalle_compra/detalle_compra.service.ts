import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalleCompra } from './detalle_compra.entity';
import { CreateDetalleCompraDto } from './dto/create-detalle-compra.dto';
import { UpdateDetalleCompraDto } from './dto/update-detalle-compra.dto';

@Injectable()
export class DetalleCompraService {
  constructor(
    @InjectRepository(DetalleCompra)
    private detalleCompraRepository: Repository<DetalleCompra>,
  ) {}

  // Crear un nuevo detalle de compra
  async create(createDto: CreateDetalleCompraDto): Promise<DetalleCompra> {
    // crear instancia del modelo del dto (objeto listo para guardarse)
    const nuevo_detalle_compra = this.detalleCompraRepository.create(createDto);
    // Guardar en la base de datos el objeto creado por .create
    return await this.detalleCompraRepository.save(nuevo_detalle_compra);
  }

  // Obtener todos los detalles de compra
  findAll(): Promise<DetalleCompra[]> {
    return this.detalleCompraRepository.find();
  }

  // Modificar un detalle de compra
  async update(
    id: number,
    updateDto: UpdateDetalleCompraDto,
  ): Promise<DetalleCompra> {
    const register = await this.detalleCompraRepository.findOne({
      where: { id_detalle_compra: id },
    });

    // Validar que el registro exista
    if (!register) {
      throw new NotFoundException(`Registro con id ${id} no encontrado`);
    }

    const updated = Object.assign(register, updateDto);
    return await this.detalleCompraRepository.save(updated);
  }

  // Eliminar un detalle de compra (producto)
  async delete(id_detalle_compra: number) {
    const result = await this.detalleCompraRepository.delete(id_detalle_compra);

    if (result.affected === 0) {
      return { message: `Producto con id ${id_detalle_compra} no encontrado` };
    }

    return { message: `Producto con id ${id_detalle_compra} eliminado` };
  }
}
