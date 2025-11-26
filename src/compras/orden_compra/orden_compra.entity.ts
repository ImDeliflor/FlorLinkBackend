import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'orden_compra', schema: 'abastecimiento' })
export class OrdenCompra {
  @PrimaryGeneratedColumn({ name: 'id_orden_compra' })
  id_orden_compra: number;

  @Column({ type: 'int' })
  id_grupo_colaborativo: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ nullable: true })
  observaciones: string;

  @Column({ type: 'int' })
  solicitado_por: number;

  @Column({ type: 'int', nullable: true })
  aprobado_por: number | null;

  @Column({ length: 50 })
  estado_compra: string;

  @Column({ type: 'int', nullable: true })
  precio_total: number | null;

  @Column({ nullable: true })
  fecha_validacion_orden_compra: Date;
}
