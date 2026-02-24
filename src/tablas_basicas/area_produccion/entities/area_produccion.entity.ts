// area-produccion.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'tablas_basicas', name: 'area_produccion' })
export class AreaProduccion {
  @PrimaryGeneratedColumn({ name: 'id_area_produccion' })
  id_area_produccion: number;

  @Column({
    name: 'nombre_area_produccion',
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false,
  })
  nombre_area_produccion: string;
}
