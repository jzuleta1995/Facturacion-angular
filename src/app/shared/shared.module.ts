import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { SelectClientesComponent } from './components/form/select-clientes/select-clientes.component';
import { SelectProductosComponent } from './components/form/select-productos/select-productos.component';

@NgModule({
  declarations:[
    NavbarComponent,
    SelectClientesComponent,
    SelectProductosComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarComponent,
    SelectClientesComponent,
    SelectProductosComponent
  ],
  providers:[]
})
export class SharedModule{}
