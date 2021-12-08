import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Usuario}from 'src/app/models/usuario.model';
import{UsuarioService}from 'src/app/services/usuario.service'


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {


  p:number = 1;
  page=1
  pageSize = 4;
  colletion = this.usuarios?.length;
  


  usuarios?:Usuario[];

  constructor(private usuarioService:UsuarioService, private _snackbar: MatSnackBar) {
   
   }

  ngOnInit(): void {
    this.listaUsuario();
    this.refreshUsers() 
  }
 

 
  refreshUsers() {

    this.usuarioService.getAll().subscribe({
      next:(data)=>{
    
        this.usuarios=data;
        (this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize
        console.log(data);
    
      },
      error:(e:any)=>console.error(e.message)
    })};

  



listaUsuario():void{
this.usuarioService.getAll().subscribe({
  next:(data)=>{

    this.usuarios=data;
    console.log(data);

  },
  error:(e:any)=>console.error(e.message)
})


}

eliminarUsuario(_id:any){
  console.log(_id);
  this.usuarioService.delete(_id)
    .subscribe({
       next: (data) => {
         this.listaUsuario();
         console.log(data);
        
         this._snackbar.open('El Usuario fue eliminado', '',{
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });

       },
       error: (e: any) => console.error(e)
    });
}


}
