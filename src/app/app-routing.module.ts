import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidosComponent } from './general/page/bienvenidos/bienvenidos.component';
import { ContactoComponent } from './general/page/contacto/contacto.component';
import { PageNotFoundComponent } from './general/page/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'bienvenidos', component: BienvenidosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: 'bienvenidos', pathMatch: 'full' },
  { path: 'ingreso', loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
