import { Component, OnInit } from '@angular/core';

import { Factura } from '@shared/model/factura';

import { FacturaService } from '@core/service/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {
  title: string;
  facturas: Factura[];

  constructor(private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.title = "Lista de Facturas";
    this.getFacturas();
  }

  public getFacturas(): void{
    this.facturaService.getFacturas().subscribe(facturas => {
      this.facturas = facturas;
    })
  }

}
