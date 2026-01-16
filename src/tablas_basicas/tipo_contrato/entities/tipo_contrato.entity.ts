import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tipo_contrato', schema: 'tablas_basicas' })
export class TipoContrato {
  @PrimaryGeneratedColumn()
  id_tipo_contrato: number;

  @Column({ length: 100 })
  nombre_tipo_contrato: string;
}
