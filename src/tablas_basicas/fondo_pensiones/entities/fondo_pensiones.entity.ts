import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'fondo_pensiones', schema: 'tablas_basicas' })
export class FondoPensiones {
  @PrimaryGeneratedColumn()
  id_fondo_pension: number;

  @Column({ length: 150 })
  nombre_fondo_pensiones: string;
}
