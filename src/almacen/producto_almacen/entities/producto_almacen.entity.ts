import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'producto_almacen', schema: 'abastecimiento' })
export class ProductoAlmacen {
  @PrimaryGeneratedColumn({ name: 'cod_producto' })
  cod_producto: number;

  @Column({ name: 'id_categoria', type: 'int', nullable: true })
  id_categoria: number;

  @Column({ name: 'descripcion', type: 'varchar', nullable: true })
  descripcion: string;

  @Column({
    name: 'unidad_medida',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  unidad_medida: string;

  @Column({ name: 'fecha_registro', type: 'timestamp', nullable: true })
  fecha_registro: Date;

  @Column({ name: 'id_categoria_costo', type: 'int', nullable: true })
  id_categoria_costo: number;
}
