import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUsuarioComponent } from './components/Usuario/add-usuario/add-usuario.component';
import { UsuarioDetailsComponent } from './components/Usuario/usuario-details/usuario-details.component';
import { UsuarioListComponent } from './components/Usuario/usuario-list/usuario-list.component';


import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//modulos compoartidos
import {SharedModule} from './components/Share/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AddUsuarioComponent,
    UsuarioDetailsComponent,
    UsuarioListComponent,
    AdminTemplateComponent,
    InicioComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
