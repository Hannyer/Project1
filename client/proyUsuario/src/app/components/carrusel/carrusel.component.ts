import { Component, OnInit } from '@angular/core';
import{NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap"
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  constructor(private _config:NgbCarouselConfig) { }


  imagenes:any[]=[

    {name:"Avion",
    img:'assets/img/aviones.jpg',
    desc:'Prueba' 
   
   },
    {name:"Avion",
     img:'assets/img/Airplane.jpg',
     desc:'Prueba' 
    
    },
   



  ]

  ngOnInit(): void {
  }

}
