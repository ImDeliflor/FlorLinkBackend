import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'empleado', schema: 'gestion_humana' })
export class Empleado {
  @PrimaryGeneratedColumn({ name: 'id_empleado' })
  id_empleado: number;

  @Column({ type: 'int' })
  id_tipo_documento: number;

  @Column({ length: 15 })
  nro_documento: string;

  @Column({ type: 'int' })
  id_ciudad_expedicion: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellidos: string;

  @Column({ type: 'int' })
  id_ciudad_residencia: number;

  @Column({ length: 20, nullable: true })
  celular: string;

  @Column({ length: 100, nullable: true })
  correo: string;

  @Column({ type: 'int' })
  id_cargo: number;

  @Column({ type: 'int' })
  id_area: number;

  @Column({ type: 'date', nullable: true })
  fecha_ingreso: Date;

  @Column({ type: 'int', nullable: true })
  salario: number;

  @Column({ length: 100, nullable: true })
  salario_letras: string;

  @Column({ type: 'int', nullable: true })
  auxilio_transporte: number;

  @Column({ length: 100, nullable: true })
  auxilio_transporte_letras: string;

  @Column({ type: 'int' })
  id_sexo: number;

  @Column({ type: 'int' })
  id_eps: number;

  @Column({ type: 'int' })
  id_fondo_pension: number;

  @Column({ type: 'int' })
  id_fondo_cesantias: number;

  @Column({ type: 'int', nullable: true })
  dias_vacaciones: number;

  @Column({ type: 'date', nullable: true })
  fecha_nacimiento: Date;

  @Column({ type: 'int' })
  id_estado_civil: number;

  @Column({ type: 'int' })
  id_medio_transporte: number;

  @Column({ type: 'boolean', default: false })
  es_jefe: boolean;

  @Column({ length: 8, nullable: true })
  estado_empleado: string;

  @Column({ type: 'int' })
  id_tipo_contrato: number;

  @Column({ type: 'int' })
  id_jefe: number;

  @Column({ length: 50 })
  nickname: string;
}
