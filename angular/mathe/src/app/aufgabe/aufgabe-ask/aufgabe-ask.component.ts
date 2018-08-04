import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Aufgabe } from '../../aufgabe';

@Component({
  selector: 'rl-aufgabe-ask',
  templateUrl: './aufgabe-ask.component.html',
  styleUrls: ['./aufgabe-ask.component.css']
})
export class AufgabeAskComponent implements OnInit {

  @Input()
  aufgabe: Aufgabe;

  @Output()
  response: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  respond(inp: HTMLInputElement) {
    this.response.emit(parseInt(inp.value));
    inp.value = '';
  }

}
