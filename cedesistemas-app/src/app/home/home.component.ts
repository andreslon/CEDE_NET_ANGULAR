import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private lblNombre = "Nombre:";
  public nombreBase = "Andrés Londoño";
  lblGuardar = "Guardar";
  cadena: string = "Hola!";
  edad: number = 30;
  visible: boolean = false;
  nombres: string[] = ['juan', 'andres', 'pedro'];
  ranking: number=5;

  private myText:string;
  
  constructor(private translate: TranslateService) { 
   
  }

  showDialog(){
    let params= {'name':this.myText};
    this.translate.get("greeting",params).subscribe((message:string)=>{
        alert(message);
    });
  }

  ngOnInit() {
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