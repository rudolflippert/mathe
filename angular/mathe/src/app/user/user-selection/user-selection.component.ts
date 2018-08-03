import { Component, OnInit, HostBinding, Input, Host, Inject } from '@angular/core';
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
  
  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.liste = this.usersService.data;
  }

}