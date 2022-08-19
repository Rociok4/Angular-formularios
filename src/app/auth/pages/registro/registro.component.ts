import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    usuario: ['', [Validators.required], this.validatorService.noPuedeSerStrider],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.camposIguales('password','password2')]
    
  })

 

  get errorEmailMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.['required']) {
      return 'El correo es obligatorio';
    } else if (errors?.['pattern']){
      return 'Formato de correo incorrecto'
    } else if (errors?.['emailOcupado']){
      return 'El correo ya está registrado'
    }
      return ''
  }

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Benito Perez',
      email: 'test@test.com',
      usuario: 'BP',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid 
            && this.miFormulario.get(campo)?.touched
  }



  submitFormulario(){
    this.miFormulario.markAllAsTouched()
  }

}
