import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'compromisos_empleado', schema: 'gestion_humana' })
export class CompromisoEmpleado {
  @PrimaryGeneratedColumn()
  id_compromiso: number;

  @Column({ type: 'int' })
  id_evaluador: number;

  @Column({ type: 'int' })
  id_empleado: number;

  @Column({ type: 'varchar', length: 300 })
  descripcion_compromiso: string;

  @Column({ type: 'int' })
  porc_cumplimiento: number;

  @Column({ type: 'varchar', length: 1 })
  semestre_compromiso: string;

  @Column({ type: 'varchar', length: 4 })
  anio_compromiso: string;

  @Column({ type: 'timestamp' })
  fecha_registro: Date;

  @Column({ type: 'text' })
  observaciones: string;
}
