import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceFormularioService {

  formGroup: FormGroup
  textSubmit : string ='';
  constructor(



  ) {
    this.formGroup = new FormGroup({
      describe: new FormControl('')
    })
  }

  submitForm() {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;
      this.textSubmit = JSON.stringify( formData);

    } else {
      console.log('Form is invalid');
    }
  }
}
