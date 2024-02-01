import { Component } from '@angular/core';

interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  tuRequerimiento: string = '';
  tuNombre: string = '';
  tuEmpresa: string = '';
  tuEmail: string = '';
  tuTelefono: string = '';
  tuMensaje: string = '';
  tuAceptacion: boolean = false;

  services: Service[] = [
    {value: 'encofrados', viewValue: 'Encofrados'},
    {value: 'prefabricado de concreto', viewValue: 'Prefabricado de concreto'},
    {value: 'puntales', viewValue: 'Puntales'},
    {value: 'accesorios de encofrado', viewValue: 'Accesorios de encofrado'},
    {value: 'accesorios de puntales', viewValue: 'Accesorios de puntales'},
    {value: 'otros', viewValue: 'Otros'}
  ];

  submitForm(): void {
    // Aquí puedes agregar la lógica para enviar el formulario (por ejemplo, mediante un servicio)
    console.log('Formulario enviado');
    console.log('Requerimiento:', this.tuRequerimiento);
    console.log('Nombre:', this.tuNombre);
    console.log('Empresa:', this.tuEmpresa);
    console.log('Email:', this.tuEmail);
    console.log('Teléfono:', this.tuTelefono);
    console.log('Mensaje:', this.tuMensaje);
    console.log('Aceptación:', this.tuAceptacion);
  }
}
