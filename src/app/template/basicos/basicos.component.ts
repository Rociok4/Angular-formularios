import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

 @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean{
    return this.miFormulario?.controls['Nombre']?.invalid &&
    this.miFormulario?.controls['Nombre']?.touched
  }

  numeroValido(): boolean {
    
    return this.miFormulario?.controls['Telefono']?.invalid &&
    this.miFormulario?.controls['Telefono']?.touched
  }

  guardar(){
    console.log('Posteo exitoso');

    this.miFormulario.resetForm();

  }

}
