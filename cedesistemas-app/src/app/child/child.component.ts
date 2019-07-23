import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
 

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {


  @Input() ParentValue:string;
  @Output() ChildEvent= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onKeyUp(text){ 
    this.ChildEvent.emit(text);
  } 

}
