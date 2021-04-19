import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresoRoutingModule } from './ingreso-routing.module';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';

@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    IngresoRoutingModule
  ]
})
export class IngresoModule { }
