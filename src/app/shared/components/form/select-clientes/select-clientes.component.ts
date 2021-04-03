import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Cliente } from '@shared/model/cliente';

import { ClienteService } from '@core/service/cliente.service';

@Component({
  selector: 'select-clientes',
  templateUrl: './select-clientes.component.html',
  styleUrls: ['./select-clientes.component.scss']
})
export class SelectClientesComponent implements OnInit {

  clientes : Cliente[];
  @Output() eventClientEmitter = new EventEmitter<Cliente>();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  public getClientes() : void{
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  public enviarCliente(clienteSeleccionado): void {
    this.eventClientEmitter.emit(clienteSeleccionado);
  }

}
