import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tipo_documento', schema: 'tablas_basicas' })
export class TipoDocumento {
  @PrimaryGeneratedColumn()
  id_tipo_documento: number;

  @Column({ length: 100 })
  nombre_tipo_documento: string;
}
