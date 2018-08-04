import { Component, Inject } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user';

@Component({
  selector: 'rl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Mathe';

  constructor(public usersService: UsersService) {
  }

  ngOnInit() {
  }

}
