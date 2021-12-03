import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { AdminTemplateComponent } from './admin-template.component';
import { UsuarioListComponent } from '../Usuario/usuario-list/usuario-list.component';

const routes: Routes = [
  { 
    path: '', component: AdminTemplateComponent, children: [
        { path: 'inicio', component: InicioComponent },
        {path:'UsuarioLista',component:UsuarioListComponent}
      
      ]


  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboradRoutingModule { }
