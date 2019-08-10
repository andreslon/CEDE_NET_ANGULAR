import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, fromEvent, interval, timer, of } from 'rxjs';

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
  ranking: number = 5;

  private myText: string;


  //1) Creacion de observable - Streaming
  ObservableMsgs: string[] = [];
  observableStream: any = Observable.create(observer => {
    observer.next("Hola");
    observer.next("a");
    observer.next("todos");
    observer.next("en");
    observer.next("Cedesistemas");
  });

  // 2) Observable - Eventos del DOM
  observableClicks = fromEvent(document.body, 'click');
  clicksMsgs: string[] = [];

  //3) Observable - Timer interval
  timerIntervalMsgs: string[] = [];
  llamarTimerInterval() {
    let tmInterval = interval(1000);
    tmInterval.subscribe(t => this.timerIntervalMsgs.push(t.toString()));
  }

  //4) Observable - Timer
  timerMsgs: string[] = [];
  llamarTimer() {
    let tm = timer(5000);
    tm.subscribe(t => this.timerMsgs.push("Hola 5000 ms despues " + t.toString()));
  }

  // 5) Observable con valores estaticos
  observableData = of('Hola', 22, true, { color: "red" }, ['andres', 'cedesistemas']);
  staticMsgs: any[] = [];

  constructor(private translate: TranslateService) {

    //1) Creacion de observable - Streaming
    this.observableStream.subscribe(msg => {
      this.ObservableMsgs.push(msg);
    });

    // 2) Observable - Eventos del DOM
    this.observableClicks.subscribe(click => {
      this.clicksMsgs.push(JSON.stringify(click));
    });
    // 5) Observable con valores estaticos
    this.observableData.subscribe(val => {
      this.staticMsgs.push(val);
    });

  }





  showDialog() {
    let params = { 'name': this.myText };
    this.translate.get("greeting", params).subscribe((message: string) => {
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