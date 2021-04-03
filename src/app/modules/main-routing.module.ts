import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ClienteComponent } from './cliente/cliente.component';
import { FacturaComponent } from './factura/factura.component';
import { FormFacturaComponent } from './factura/form/form-factura.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { ProductoComponent } from './producto/producto.component';
import { VerFacturaComponent } from './factura/ver-factura/ver-factura.component';

const routes: Routes = [
  { path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'producto', component: ProductoComponent },
      { path: 'cliente', component: ClienteComponent },
      { path: 'factura', component: FacturaComponent },
      { path: 'factura/crear', component: FormFacturaComponent },
      { path: 'factura/:id', component: VerFacturaComponent }
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class MainRoutingModule{

}
