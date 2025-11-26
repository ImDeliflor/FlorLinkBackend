export class CreateOrdenCompraDto {
  id_orden_compra: number;
  id_grupo_colaborativo: number;
  fecha: Date;
  observaciones: string;
  solicitado_por: number;
  aprobado_por: number;
  precio_total: number;
  estado_compra: string;
}
