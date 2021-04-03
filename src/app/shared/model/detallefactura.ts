import { Producto } from './producto';

export interface DetalleFactura{
  numDetalle?: number;
  idFactura?: number;
  producto?: Producto;
  cantidad?: number;
  precio?: number;
}
