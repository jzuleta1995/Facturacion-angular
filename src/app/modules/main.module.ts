import { NgModule } from "@angular/core";

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from "@shared/shared.module";

import { ClienteComponent } from './cliente/cliente.component';
import { FacturaComponent } from './factura/factura.component';
import { FormFacturaComponent } from './factura/form/form-factura.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { ProductoComponent } from './producto/producto.component';
import { FormDetalleComponent } from './factura/form-detalle/form-detalle.component';
import { VerFacturaComponent } from './factura/ver-factura/ver-factura.component';

@NgModule({
  declarations:[
    ClienteComponent,
    FacturaComponent,
    FormFacturaComponent,
    HomeComponent,
    MainComponent,
    ProductoComponent,
    FormDetalleComponent,
    VerFacturaComponent
  ],
  imports:[
    MainRoutingModule,
    SharedModule
  ],
  exports:[],
  providers:[]
})
export class MainModule{

}
