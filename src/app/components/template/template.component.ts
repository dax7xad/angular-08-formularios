import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  constructor() { }

  guardar(forma: any) {
    console.log('Formulario posteando');
    console.log(forma);
  }

}
