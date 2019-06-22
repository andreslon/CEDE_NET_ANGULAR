import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private lblNombre = "Nombre:";
  public nombreBase = "Andrés Londoño";
  lblGuardar = "Guardar";
  cadena: string = "Hola!";
  edad: number = 30;
  visible: boolean = false;
  nombres: string[] = ['juan', 'andres', 'pedro'];

  constructor() {
 
      
    
  }
  Guardar() {
    const resultado1 = this.sumarTs(1, 2);
    var resultado2 = this.sumarTs(1, 2);
    let resultado3 = this.sumarTs(1, 2);
    let resultado4 = sumarJs(1, 2);
    alert("Guardado exitosamente " + this.nombreBase);
  }
  sumarTs(n1: number, n2: number): number {
    return n1 + n2;
  }
}

function sumarJs(n1, n2) {
  return n1 + n2;
}
