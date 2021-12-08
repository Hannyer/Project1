import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header" style="background-color: #343A40; color:white; text-align: center;">
      <h4 class="modal-title">Requisitos para poder viajar</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" style="background-color: #E6E3DE;">
      <p> Las personas que deseen viajar, deben cumplir con los siguientes requerimientos:
        <br>
        <br>
        1- La persona debe presentar su pasaporte completamente al día con las regulaciones especificadas.
        <br>
        <br>
        2- En caso de viajar con menores de edad, deberán presentar el permiso de salida para menores de edad para autorizar a las personas con quien viajará
        <br>
        <br>
        3- Las personas deberán contar con el esquema de vacunación completa
        <br>
        <br>4- En caso de no portar con el esquema, podrá presentar el certificado de una prueba contra COVID-19 realizada con no más de 3 días de tiempo de expedición
      </p>
    </div>
    <div class="modal-footer" style=" background-color:  #343A40;">
      <button type="button" class="btn btn-outline-light" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `
})
export class NgbdModalContent {
  

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'Requisitos';
  }
}