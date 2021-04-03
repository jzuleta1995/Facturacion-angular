import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';

import { ProductoService } from '@core/service/producto.service';
import { Producto } from '@shared/model/producto';

@Component({
  selector: 'select-productos',
  templateUrl: './select-productos.component.html',
  styleUrls: ['./select-productos.component.scss']
})
export class SelectProductosComponent implements OnInit {
  productos: Producto[];
  @Input('producto-seleccionado') productoSeleccionado : Producto = {};
  @Output() eventEmitterProducto = new EventEmitter<Producto>();

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
  }


  public getProductos(): void {
    this.productoService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

  enviarProducto(){
    this.eventEmitterProducto.emit(this.productoSeleccionado);
  }
}
