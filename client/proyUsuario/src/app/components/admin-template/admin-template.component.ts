import { Component, OnInit } from '@angular/core';
import { UsuarioListComponent } from '../Usuario/usuario-list/usuario-list.component';


import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}




