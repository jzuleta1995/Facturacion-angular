import { Component, OnInit } from '@angular/core';

import { Factura } from '@shared/model/factura';
import Swal from 'sweetalert2';

import { ClienteService } from '@core/service/cliente.service';
import { FacturaService } from '@core/service/factura.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html',
  styleUrls: ['./form-factura.component.scss'],
})
export class FormFacturaComponent implements OnInit {
  title: string;
  factura: Factura;

  constructor(private clienteService: ClienteService,
              private FacturaService: FacturaService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.title = 'Formulario de creación de factura';
    this.factura = {};
    this.factura.detalle = [];
    this.factura.fecha = new Date().toLocaleDateString('en-ZA');
  }

  public obtenerCliente(cliente): void {
    if (cliente.target.value != 0) {
      this.clienteService
        .getCliente(cliente.target.value)
        .subscribe((cliente) => {
          this.factura.cliente = cliente;
        });
    }
  }

  public generarMensaje(
    iconParam: any,
    titleParam: any,
    textParam: any,
    footerParam: any
  ): void {
    Swal.fire({
      icon: iconParam,
      title: titleParam,
      text: textParam,
      footer: footerParam,
    });
  }

  public obtenerDetalleFactura($event): void {
    this.factura.detalle = $event;
  }

  public crearFactura() : void{
    if(this.factura.detalle.length == 0){
      this.generarMensaje('error',
                          'Error',
                          'Por favor registrar al menos un detalle',
                          'No hay detalles relacionados a la factura');
    }else if(this.factura.cliente == null){
      this.generarMensaje('error',
                          'Error',
                          'Por favor seleccionar un cliente',
                          'No hay un cliente para relacionar a la factura');
    }else{
      this.asignarNumDetalle();

      this.FacturaService.saveFactura(this.factura).subscribe(factura => {
        if(factura){
          this.generarMensaje('success', 'Exitó', 'La factura se ha almacenado satisfactoriamente', 'Operación exitosa');
          this.router.navigate(["/factura"]);
        }else{
          console.log('error');
        }
      });
    }
  }

  public asignarNumDetalle() : void{
    let numDetalle = 1;

    this.factura.detalle.forEach(detalle => {
      detalle.numDetalle = numDetalle;
      numDetalle++;
    });
  }

}
