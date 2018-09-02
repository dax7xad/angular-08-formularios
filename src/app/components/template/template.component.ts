import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  constructor() { }

  guardar(forma: NgForm) {
    console.log('Formulario posteando');
    console.log(forma);
  }

}
