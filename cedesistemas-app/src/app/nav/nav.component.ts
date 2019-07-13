import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  
  constructor() { }

  ngOnInit() {
  }

}
