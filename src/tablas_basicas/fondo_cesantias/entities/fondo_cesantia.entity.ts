import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'fondo_cesantias', schema: 'tablas_basicas' })
export class FondoCesantias {
  @PrimaryGeneratedColumn()
  id_fondo_cesantias: number;

  @Column({ length: 150 })
  nombre_fondo_cesantias: string;
}
