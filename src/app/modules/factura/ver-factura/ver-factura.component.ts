import { FacturaService } from '@core/service/factura.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Factura } from '@shared/model/factura';

@Component({
  selector: 'app-ver-factura',
  templateUrl: './ver-factura.component.html',
  styleUrls: ['./ver-factura.component.scss']
})
export class VerFacturaComponent implements OnInit {
  title: string;
  factura: Factura;
  total: number;

  constructor(private facturaService : FacturaService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.factura = {};
    this.factura.cliente = {};
    this.factura.detalle = [];

    const idFactura: string = this.route.snapshot.paramMap.get('id');

    this.facturaService.getFactura(idFactura).subscribe(factura => {
      this.factura = factura;
      this.total = this.facturaService.calcularTotal(this.factura.detalle);
      this.title = "Factura de cliente: " + this.factura.cliente.nombre;
    });
  }

}
