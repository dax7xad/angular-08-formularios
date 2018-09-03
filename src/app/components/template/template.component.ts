import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
.ng-invalid.ng-touched:not(form) {
  border: 1px solid red;
}
    `]
})
export class TemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: null,
    acepta: false,
  };

  paises: IPaises[] = [
    { codigo: 'NI', nombre: 'Nicaragua' },
    { codigo: 'GTM', nombre: 'Guatemala' },
  ];

  ListSexo: string[] = ['Masculino', 'Femenino', 'Sin Definir'];

  constructor() {

  }

  guardar(forma: NgForm) {
    console.log('Formulario posteando');
    console.log('ngForm', forma);
    console.log('values', forma.value);
    console.log('usuario', this.usuario);

  }

}


interface IPaises {
  codigo: string;
  nombre: string;
}

