import { Column, PrimaryColumn, ViewEntity } from 'typeorm';

/**
 * Entidad que representa la vista:
 * abastecimiento_views.informe_detalle_compra_orden_v
 *
 * Esta vista combina información detallada de las órdenes de compra,
 * incluyendo datos de producto, solicitante, aprobador y estado.
 */
@ViewEntity({
  schema: 'abastecimiento_views',
  name: 'informe_detalle_compra_orden_v',
})
export class DetalleCompraView {
  // ID único del detalle de compra
  @PrimaryColumn({ name: 'id_detalle_compra', type: 'int' })
  id_detalle_compra: number;

  // Fecha del registro o creación del detalle
  @Column({ name: 'fecha', type: 'timestamp' })
  fecha: Date;

  // Número de orden de compra
  @Column({ name: 'nro_orden_compra', type: 'varchar', length: 50 })
  nro_orden_compra: string;

  // Nombre del grupo colaborativo
  @Column({
    name: 'grupo_colaborativo',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  grupo_colaborativo: string | null;

  @Column({ name: 'id_categoria' })
  id_categoria: number;

  // Categoría del producto solicitado
  @Column({
    name: 'categoria_producto',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  categoria_producto: string | null;

  // Descripción del producto solicitado
  @Column({ name: 'descripcion_producto', type: 'varchar', length: 255 })
  descripcion_producto: string;

  // Cantidad solicitada del producto
  @Column({
    name: 'cantidad_solicitada',
    type: 'int',
    transformer: {
      to: (value: number) => value, // se usa al guardar
      from: (value: string): number => parseFloat(value), // se usa al leer
    },
  })
  cantidad_solicitada: number;

  // Unidad de medida (por ejemplo: kg, unidades, litros, etc.)
  @Column({ name: 'unidad_medida', type: 'varchar', length: 50 })
  unidad_medida: string;

  // id del usuario solicitante
  @Column({ type: 'int' })
  id_solicitante: number;

  // Nombre del usuario que solicitó el producto
  @Column({ name: 'solicitado_por', type: 'varchar', length: 150 })
  solicitado_por: string;

  // id del usuario aprobador
  @Column({ type: 'int', nullable: true })
  id_aprobador: number | null;

  // Nombre del usuario que aprobó el producto
  @Column({
    name: 'aprobado_por',
    type: 'varchar',
    length: 150,
    nullable: true,
  })
  aprobado_por: string | null;

  // Observaciones asociadas a la solicitud o aprobación
  @Column({ name: 'observaciones', type: 'text', nullable: true })
  observaciones: string | null;

  // Estado actual del detalle de compra (Ej: Pendiente, Aprobado, Rechazado)
  @Column({ name: 'estado_detalle_compra', type: 'varchar', length: 50 })
  estado_detalle_compra: string;

  // Fecha de la primer aprobación
  @Column({ name: 'fecha_validacion_detalle_compra', type: 'timestamp' })
  fecha_validacion_detalle_compra: Date;

  // Estado general de la compra (Ej: Aprobada, En proceso, Cancelada)
  @Column({ name: 'estado_compra', type: 'varchar', length: 50 })
  estado_compra: string;

  @Column({ name: 'precio_total', type: 'int', nullable: true })
  precio_total: number | null;

  // Fecha de la última aprobación
  @Column({ name: 'fecha_validacion_orden_compra', type: 'timestamp' })
  fecha_validacion_orden_compra: Date;
}
