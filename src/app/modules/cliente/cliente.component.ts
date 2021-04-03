import { Component, OnInit } from '@angular/core';

import { Cliente } from '@shared/model/cliente';
import { ClienteService } from '@core/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  clientes : Cliente[];

  title: string;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.title = "Listado de clientes";
    this.obtenerClientes();
  }

  obtenerClientes(): void{
    this.clienteService.getClientes().subscribe(clientes =>{
      this.clientes = clientes;
    });

    console.log("clientes", this.clientes);
  }

}
