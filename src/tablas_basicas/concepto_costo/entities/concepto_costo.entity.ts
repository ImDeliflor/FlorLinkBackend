import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'concepto_costo', schema: 'tablas_basicas' })
export class ConceptoCosto {
  @PrimaryGeneratedColumn({ name: 'id_concepto_costo' })
  id_concepto_costo!: number;

  @Column({ name: 'nombre_concepto_costo', type: 'varchar' })
  nombre_concepto_costo!: string;
}
