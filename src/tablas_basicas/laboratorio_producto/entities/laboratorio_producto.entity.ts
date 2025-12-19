import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'laboratorio_producto', schema: 'tablas_basicas' })
export class LaboratorioProducto {
  @PrimaryGeneratedColumn({ name: 'id_laboratorio' })
  id_laboratorio: number;

  @Column({ name: 'nombre_laboratorio' })
  nombre_laboratorio: string;
}
