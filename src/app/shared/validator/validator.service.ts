import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

   noPuedeSerStrider = (control: FormControl): ValidationErrors | null =>{
    const valor:string = control.value?.trim().toLowerCase();
    if (valor === 'strider'){
      return {
        noStrider: true
      }
    }

    return null;
}

camposIguales(campo1: string, campo2: string) {
  return ( formGroup: AbstractControl ): ValidationErrors | null => {
    const valor1 = formGroup.get(campo1)?.value;
    const valor2 = formGroup.get(campo2)?.value;

    if (valor1 === valor2) {
      if (formGroup.get(campo2)?.hasError('noIguales')) {
        delete formGroup.get(campo2)?.errors?.['noIguales'];
        formGroup.get(campo2)?.updateValueAndValidity();
      }
      return null;
    }
    formGroup.get(campo2)?.setErrors({noIguales: true});
    return { noIguales: true };
  }
}
}
