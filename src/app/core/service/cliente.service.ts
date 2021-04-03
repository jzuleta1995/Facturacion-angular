import { Cliente } from '@shared/model/cliente';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  urlService : string = environment.baseURL + "/clientes"

  constructor(private httpClient: HttpClient) { }

  public getClientes() : Observable<any>{
    return this.httpClient.get<Cliente>(this.urlService);
  }

  public getCliente(id : number) : Observable<any>{
    return this.httpClient.get<Cliente>(this.urlService + "/" + id);
  }

}
