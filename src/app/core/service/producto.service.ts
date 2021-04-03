import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { environment } from './../../../environments/environment';
import { Producto } from '@shared/model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlService : string = environment.baseURL+"/productos";

  constructor(private httpClient: HttpClient) { }

  public getProductos(): Observable<any>{
    return this.httpClient.get<Producto>(this.urlService);
  }

  public getProducto(id: number): Observable<any> {
    return this.httpClient.get<Producto>(this.urlService + "/" + id);
  }

}
