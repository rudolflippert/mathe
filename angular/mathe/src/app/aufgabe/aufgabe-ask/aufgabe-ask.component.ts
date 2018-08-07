import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Aufgabe } from '../../aufgabe';
import { debug } from 'util';

@Component({
  selector: 'rl-aufgabe-ask',
  templateUrl: './aufgabe-ask.component.html',
  styleUrls: ['./aufgabe-ask.component.scss']
})
export class AufgabeAskComponent implements AfterViewInit {

  @Input()
  aufgabe: Aufgabe;

  @Output()
  response: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('box')
  box: ElementRef<HTMLInputElement>;

  constructor() { }

  ngAfterViewInit() {
    this.box.nativeElement.focus();
  }

  respond(inp: HTMLInputElement) {
    const r = parseInt(inp.value, 10);
    if (!isNaN(r)) {
      this.response.emit(r);
    }
    inp.value = '';
  }

}
