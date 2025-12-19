import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'entradas_pendientes_almacen', schema: 'abastecimiento' })
export class EntradasPendientesAlmacen {
  @PrimaryGeneratedColumn({ name: 'id_entrada_pendiente' })
  id_entrada_pendiente: number;

  @Column({ name: 'cod_producto' })
  cod_producto: number;

  @Column({
    name: 'cantidad_a_registrar',
    type: 'numeric',
    precision: 7,
    scale: 1,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  cantidad_a_registrar: number;

  @Column({ name: 'fecha_registro', nullable: true })
  fecha_registro: Date;

  @Column({ name: 'estado_entrada' })
  estado_entrada: string;
}
