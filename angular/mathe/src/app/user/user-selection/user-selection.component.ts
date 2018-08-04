import { Component, OnInit, HostBinding, Input, Host, Inject, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { User } from 'src/app/user';
import { AppComponent } from '../../app.component';
import { UsersService } from '../../users.service';

@Component({
  selector: 'rl-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {

  liste: User[];
  newUser = false;
  
  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.liste = this.usersService.data;
  }

  createUser(box: HTMLInputElement) {
    if (box.value) {
      const user = {
        name: box.value,
        right: 0,
        wrong: 0,
        todo: [],
        done: []
      } as User;
      this.usersService.data.push(user);
      this.usersService.user = user;
      this.usersService.newTodos();
      this.usersService.storeNew();
    }
    box.value = '';
    this.newUser = false;
  }
}
