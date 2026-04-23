import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tipo_tarifa', schema: 'tablas_basicas' })
export class TipoTarifa {
  @PrimaryGeneratedColumn({ name: 'id_tipo_tarifa' })
  id_tipo_tarifa!: number;

  @Column({ name: 'nombre', type: 'varchar' })
  nombre!: string;
}
