import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'rl-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit, OnDestroy {

  @Input()
  title = 'myTitle';
  date = new Date();
  private intervalId: number;

  constructor() { }

  ngOnInit() {
    this.intervalId = window.setInterval(() => {
      this.date = new Date();
    }, 1000)
  }

  ngOnDestroy() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

}
