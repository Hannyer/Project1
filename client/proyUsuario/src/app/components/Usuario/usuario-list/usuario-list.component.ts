import { Component, OnInit } from '@angular/core';

import {Usuario}from 'src/app/models/usuario.model';
import{UsuarioService}from 'src/app/services/usuario.service'

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios?:Usuario[];

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.listaUsuario();
  }



listaUsuario():void{
this.usuarioService.getAll().subscribe({
  next:(data)=>{

    this.usuarios=data;
    console.log(data);

  },
  error:(e:any)=>console.error(e.message)
})


}



}
