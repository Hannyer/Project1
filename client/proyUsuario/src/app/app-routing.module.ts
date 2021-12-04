import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioListComponent } from './components/Usuario/usuario-list/usuario-list.component';
import { UsuarioDetailsComponent } from './components/Usuario/usuario-details/usuario-details.component';
import { AddUsuarioComponent } from './components/Usuario/add-usuario/add-usuario.component';
import { Usuario } from './models/usuario.model';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component'; 
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import{HomeComponent} from './components/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  { path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminTemplateComponent, children: [
    { path: 'inicio', component: InicioComponent },
    {path:'UsuarioLista',component:UsuarioListComponent},
    { path: 'modificarUsuario', component: AddUsuarioComponent},
    { path: 'nosotros', component: NosotrosComponent},
  
  ]},
 
  //{path:"**",redirectTo:'/admin-template', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
