import { Component } from '@angular/core';

@Component({
  selector: 'ComponentePrincipal',
  templateUrl: './Componente1.component.html',
  styleUrls: ['./Componente1.component.css'],
})
export class Componente1 {
  protected title: string = 'DirectivasAPP';
  protected mensaje: string = '';
  protected registrado: boolean = false;
  protected email: string = '';
  protected passw: string = '';
  protected items: any[];

  constructor() {
    this.items = [
      { titulo: 'El loco maltunorspikan' },
      { titulo: 'Bucle For en Angular con directivas' },
      { titulo: 'La comidad si es sabrosa' },
      { titulo: 'Egda primo hermano?' },
      { titulo: 'Guarapo con pan' },
      { titulo: 'Casi bueno 300' },
      { titulo: 'Teotiguakan y la serpiente emplumada' },
      { titulo: 'Avatar nos llevara a pandora' },
      { titulo: 'Se la mamo vale' },
    ];
  }
  contolRegistro() {
    if (this.email.length > 0 && this.passw.length > 0) {
      this.registrado = true;
      this.mensaje =
        'Usuario Registrado: Usuario: ' +
        this.email +
        '. Password: ' +
        this.passw;
    }
  }
}
