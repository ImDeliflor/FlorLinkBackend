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

  async findAllEmployees(): Promise<EmpleadoView[]> {
    return this.empleadoViewRepository.find({
      order: { nombre: 'ASC' },
      select: [
        'id_empleado',
        'tipo_documento',
        'nro_documento',
        'ciudad_expedicion',
        'nombre',
        'apellidos',
        'nickname',
        'ciudad_residencia',
        'celular',
        'correo',
        'cargo',
        'grupo',
        'area',
        'fecha_ingreso',
        'salario',
        'salario_letras',
        'auxilio_transporte',
        'auxilio_transporte_letras',
        'codigo_sexo',
        'sexo',
        'tratamiento',
        'eps',
        'fondo_pension',
        'fondo_cesantias',
        'dias_vacaciones',
        'fecha_nacimiento',
        'estado_civil',
        'cantidad_hijos',
        'hijos',
        'medio_transporte',
        'cedula_jefe',
        'nombre_jefe',
        'correo_jefe',
        'es_jefe',
        'tipo_contrato',
        'estado_empleado',
      ],
    });
  }

  async findByCelular(celular: string): Promise<EmpleadoView | null> {
    return this.empleadoViewRepository.findOne({
      where: { celular },
      select: [
        'id_empleado',
        'tipo_documento',
        'nro_documento',
        'ciudad_expedicion',
        'nombre',
        'apellidos',
        'nickname',
        'ciudad_residencia',
        'celular',
        'correo',
        'cargo',
        'grupo',
        'area',
        'fecha_ingreso',
        'salario',
        'salario_letras',
        'auxilio_transporte',
        'auxilio_transporte_letras',
        'codigo_sexo',
        'sexo',
        'tratamiento',
        'eps',
        'fondo_pension',
        'fondo_cesantias',
        'dias_vacaciones',
        'fecha_nacimiento',
        'estado_civil',
        'cantidad_hijos',
        'hijos',
        'medio_transporte',
        'cedula_jefe',
        'nombre_jefe',
        'correo_jefe',
        'es_jefe',
        'tipo_contrato',
        'estado_empleado',
      ],
    });
  }

  async findEmpleadoByCorreo(correo: string): Promise<EmpleadoView | null> {
    return this.empleadoViewRepository.findOne({
      where: { correo },
      select: [
        'id_empleado',
        'tipo_documento',
        'nro_documento',
        'ciudad_expedicion',
        'nombre',
        'apellidos',
        'nickname',
        'ciudad_residencia',
        'celular',
        'correo',
        'cargo',
        'grupo',
        'area',
        'fecha_ingreso',
        'codigo_sexo',
        'sexo',
        'tratamiento',
        'eps',
        'fondo_pension',
        'fondo_cesantias',
        'dias_vacaciones',
        'fecha_nacimiento',
        'estado_civil',
        'cantidad_hijos',
        'hijos',
        'medio_transporte',
        'id_jefe',
        'cedula_jefe',
        'nombre_jefe',
        'correo_jefe',
        'es_jefe',
        'id_usuario',
        'roles',
        'id_jefe_grupo_colaborativo',
        'jefe_grupo_colaborativo',
        'id_grupo_colaborativo',
        'nombre_grupo_colaborativo',
        'tipo_contrato',
        'estado_empleado',
      ],
    });
  }

  // Obtener el equipo de trabajo de un jefe
  async getWorkTeam(id_jefe_directo: number) {
    return this.empleadoViewRepository.find({
      where: { id_jefe: id_jefe_directo },
      select: {
        id_empleado: true,
        nombre: true,
        apellidos: true,
        es_jefe: true,
        grupo: true,
      },
    });
  }
}
