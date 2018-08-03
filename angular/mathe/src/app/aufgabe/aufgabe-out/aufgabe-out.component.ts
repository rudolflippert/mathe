import { Component, OnInit, Input } from '@angular/core';
import { Aufgabe } from '../../aufgabe';

@Component({
  selector: 'rl-aufgabe-out',
  templateUrl: './aufgabe-out.component.html',
  styleUrls: ['./aufgabe-out.component.css']
})
export class AufgabeOutComponent implements OnInit {

  @Input()
  entry: Aufgabe;
  
  constructor() { }

  ngOnInit() {
  }

}
