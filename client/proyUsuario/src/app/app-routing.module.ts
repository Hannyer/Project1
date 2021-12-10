import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioListComponent } from './components/Usuario/usuario-list/usuario-list.component';

import { AddUsuarioComponent } from './components/Usuario/add-usuario/add-usuario.component';
import { Usuario } from './models/usuario.model';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component'; 
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import{HomeComponent} from './components/home/home.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { NgbdModalComponent } from './components/modal/modal.component';
import { VueloListComponent } from './components/Vuelos/vuelo-list/vuelo-list.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  
  {path:'home',component:HomeComponent,children:[
    { path: 'carrusel', component: CarruselComponent},
  ]},

  { path: 'login', component: LoginComponent},
  { path: 'carrusel', component: CarruselComponent},

  {path: 'admin', component: AdminTemplateComponent, children: [
    { path: '', redirectTo: '/admin/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    {path: 'modal',component:NgbdModalComponent},
    {path:'UsuarioLista',component:UsuarioListComponent},
    { path: 'registrar', component: AddUsuarioComponent},
    { path: 'nosotros', component: NosotrosComponent},
    {path:'listaVuelos',component:VueloListComponent}

  
  ]},

  { path: 'registrar', component: AddUsuarioComponent},
  
 
  //{path:"**",redirectTo:'/admin-template', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
