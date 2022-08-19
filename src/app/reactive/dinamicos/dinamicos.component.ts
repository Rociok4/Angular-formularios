import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent  {

  miFormulario: FormGroup = this.fb.group({
    animal: ['', [Validators.required, Validators.minLength(3) ]],
    favoritos: this.fb.array([
      ['Persa'],
      ['Orange Tabby']
    ], Validators.required)
   
  });

  nuevoFavorito: FormControl = this.fb.control ('', Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  
  campoNoValido(campo:string){
    return this.miFormulario.controls[campo]?.errors &&
    this.miFormulario.controls[campo]?.touched
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){return;}

    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));

    this.nuevoFavorito.reset();
  }

  borrar(i:number){

      this.favoritosArr.removeAt(i);
    }
    

  guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
    return;
    }

    console.log(this.miFormulario.value);
  }

}

