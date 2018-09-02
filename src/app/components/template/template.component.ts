import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario: Object = {
    nombre: 'Alvaro Dax',
    apellido: 'Diaz Amaya',
    correo: 'user@example.com',
  };

  constructor() { }

  guardar(forma: NgForm) {
    console.log('Formulario posteando');
    console.log('ngForm', forma);
    console.log('values', forma.value);
  }

}
