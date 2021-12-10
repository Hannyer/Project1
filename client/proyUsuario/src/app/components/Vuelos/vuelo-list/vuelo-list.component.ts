import { Component, OnInit } from '@angular/core';
import { Vuelo } from 'src/app/models/vuelo.model';
import { VueloService } from 'src/app/services/vuelo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import {AvionService}from "src/app/services/avion.service"
import { Avion } from 'src/app/models/avion.model';
@Component({
  selector: 'app-vuelo-list',
  templateUrl: './vuelo-list.component.html',
  styleUrls: ['./vuelo-list.component.css']
})
export class VueloListComponent implements OnInit {

  constructor(private vueloService:VueloService,private avionService:AvionService, private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
//this.listaVuelos();

  }
vuelos?:Vuelo[];



/*
  listaVuelos():void{
    this.vueloService.getAll() 
    .subscribe({
      next:(data)=>{
        
     for(let i=0;i<data.length;i++){
      
      const dato= new Avion((this.avionService.get(data[i].IdAvion));
      data[i].IdAvion=dat

     }   

        this.vuelos=data;
        console.log(data);
    
      },
      error:(e:any)=>console.error(e.message)
    })
    
    
    }
*/
}


