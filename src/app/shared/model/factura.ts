import { Cliente } from './cliente';
import { DetalleFactura } from './detallefactura';

export interface Factura{
  numFactura?: number;
  cliente?: Cliente;
  fecha?: string;
  detalle?: DetalleFactura[];
}
