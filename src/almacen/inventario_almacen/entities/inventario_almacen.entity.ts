import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'inventario_almacen', schema: 'abastecimiento' })
export class InventarioAlmacen {
  @PrimaryGeneratedColumn({ name: 'id_inventario' })
  id_inventario: number;

  @Column({ name: 'cod_producto' })
  cod_producto: number;

  @Column({
    name: 'inventario_actual',
    type: 'numeric',
    precision: 7,
    scale: 1,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  inventario_actual: number;
}
