import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
    correo: 'Fernando.herrera85@gmail.com',
    pasatiempos: ['correr', 'comer', 'dormir']
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
          Validators.minLength(3),
          this.noherrera
        ])
      }),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ]),
      pasatiempos: new FormArray([
        new FormControl('correr', Validators.required)
      ]),
      username: new FormControl('', Validators.required, this.existeUsuario),
      password1: new FormControl('', [Validators.required]),
      password2: new FormControl('')
    });

    // Asignar validaciones
    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual
    ]);

    // Cargar valores por defecto
    // this.forma.setValue(this.usuario);
  }

  ngOnInit() { }

  guardarCambios() {
    console.log(this.forma);
    // restablecer el formulario (con valores por defecto)
    // this.forma.reset(this.usuario);

    // Restablecer el formulario (con valores vacios)
    // this.forma.reset({
    //   nombrecompleto: {
    //     nombre: '', apellido: ''
    //   },
    //   correo: '',
    // });
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Dormir', Validators.required)
    );
  }

  /// Validacion Personalizada
  noherrera(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'herrera') {
      return { noherrera: true };
    } else {
      return null;
    }
  }

  noIgual = (control: FormControl): { [s: string]: boolean } => {
    if (control.value !== this.forma.controls['password1'].value) {
      return {
        noiguales: true
      };
    } else {
      return null;
    }
  }

  existeUsuario = (control: FormControl): Promise<any> | Observable<any> => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'dax7xad') {
          resolve({
            existe: true
          });
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return promesa;
  }
}
