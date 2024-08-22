import { Component } from '@angular/core';
import { ServiceFormularioService } from './service-formulario.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss'
})
export class AngularComponent {

  constructor (public angularFormGroup : ServiceFormularioService){}

  

}
