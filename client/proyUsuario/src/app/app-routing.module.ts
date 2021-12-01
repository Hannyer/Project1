import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioListComponent } from './components/Usuario/usuario-list/usuario-list.component';
import { UsuarioDetailsComponent } from './components/Usuario/usuario-details/usuario-details.component';
import { AddUsuarioComponent } from './components/Usuario/add-usuario/add-usuario.component';
import { Usuario } from './models/usuario.model';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component'; 
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
