import { Component, Inject } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user';

@Component({
  selector: 'rl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mathe';
  date = new Date();
  user: User;
  liste: User[];

  constructor(public usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsers();
    this.liste = this.usersService.data;
    window.setInterval(() => {
      this.date = new Date();
    }, 1000)
  }

}
