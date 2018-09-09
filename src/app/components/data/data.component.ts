import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {
  forma: FormGroup;

  usuario: Object = {
    nombrecompleto: {
      nombre: 'Fernando',
      apellido: 'herrera'
    },
    correo: 'Fernando.herrera85@gmail.com'
  };

  constructor() {

    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ])
      }),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ])
    });

    // Cargar valores por defecto
    this.forma.setValue(this.usuario);


  }

  ngOnInit() { }

  guardarCambios() {
    console.log(this.forma);
    // restablecer el formulario (con valores por defecto)
    // this.forma.reset(this.usuario);

    // Restablecer el formulario (con valores vacios)
    this.forma.reset({
      nombrecompleto: {
        nombre: '', apellido: ''
      },
      correo: '',
    });
  }
}
