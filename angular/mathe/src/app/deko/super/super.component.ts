import { Component, OnInit, Input, OnChanges, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'rl-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.scss']
})
export class SuperComponent implements OnInit, OnChanges, AfterViewInit {

  @Input()
  score: number;
  private imgs: string[] = [
    'assets/schaf.gif',
    'assets/mops.gif',
    'assets/loewe.gif',
    'assets/affe.gif',
    'assets/fuchs.gif',
    'assets/kuh.gif'
  ]
  src: string = '';
  x: number = 0;
  y: number = 0;
  private maxX: number = 0;
  private maxY: number = 0;
  private dirX: number = 5;
  private dirY: number = 5;

  @ViewChild('img', {read: ElementRef})
  box: ElementRef<HTMLImageElement>;

  private lastShow: number = undefined;
  show: boolean = false;
  ani: Subscription;

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  newImg() {
    this.src = this.imgs[Math.floor(Math.random() * this.imgs.length)];
    this.maxX = window.innerWidth - 100;
    this.maxY = window.innerHeight - 100;
    this.x = Math.floor(Math.random()*this.maxX);
    this.y = Math.floor(Math.random()*this.maxY);
  }

  ngOnChanges() {
    if (this.lastShow === undefined) {
      this.lastShow = this.score;
    }
    if (this.score > this.lastShow && this.score % 5 === 0) {
      this.lastShow = this.score;
      this.newImg();
      this.show = true;
      interval(10000).pipe(first()).subscribe(() => {
        this.show = false;
        this.ani.unsubscribe();
        this.x = 0;
        this.y = 0;
      });
      this.ani = interval(20).subscribe(() => {
        this.x += this.dirX;
        this.y += this.dirY;
        if (this.x > this.maxX) {
          this.dirX = -5;
        }
        if (this.x < 0) {
          this.dirX = 5;
        }
        if (this.y > this.maxY) {
          this.dirY = -5;
        }
        if (this.y < 0) {
          this.dirY = 5;
        }
      });
    }

  }

}
