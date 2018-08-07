import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'rl-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  unselect: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  doUnselect() {
    this.unselect.emit();
  }

  getScore() {
    return this.user.right - this.user.wrong;
  }

}
