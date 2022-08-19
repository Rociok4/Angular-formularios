import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

//  miFormulario: FormGroup = new FormGroup ({
//   nombre   : new FormControl ('RTX 4080ti'),
//   apellidos: new FormControl ('RTX 4080ti'),
//   telefono : new FormControl ('123456789'),
//   ciudad   : new FormControl ('madrid'),
//  })

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3) ]],
    apellidos: [],
    telefono: [, [Validators.required, Validators.minLength(9) ]],
    ciudad: []
  })
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      telefono: +34

    })
  }

  

  campoNoValido(campo:string){
    return this.miFormulario.controls[campo]?.errors &&
    this.miFormulario.controls[campo]?.touched
  }

  guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
    return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset()


  }

}
