import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidosComponent } from './general/page/bienvenidos/bienvenidos.component';
import { PageNotFoundComponent } from './general/page/page-not-found/page-not-found.component';
import { ContactoComponent } from './general/page/contacto/contacto.component';
import { CuadroComponent } from './general/componente/cuadro/cuadro.component';
// import { LoginComponent } from './ingreso/page/login/login.component';
// import { RegistroComponent } from './ingreso/page/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidosComponent,
    PageNotFoundComponent,
    ContactoComponent,
    CuadroComponent,
    // LoginComponent,
    // RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
