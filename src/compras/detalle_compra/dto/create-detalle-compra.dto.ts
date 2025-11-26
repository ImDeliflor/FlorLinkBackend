import { Transform } from 'class-transformer';

export class CreateDetalleCompraDto {
  id_detalle_compra: number;
  id_categoria: number;
  id_orden_compra: number;
  @Transform(({ value }): string => {
    if (!value || typeof value !== 'string') return '';
    const clean = value.trim(); // elimina espacios al inicio y al final
    return clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase();
  })
  descripcion_producto: string;
  unidad_medida: string;
  cantidad_solicitada: number;
  estado_detalle_compra: string;
}
