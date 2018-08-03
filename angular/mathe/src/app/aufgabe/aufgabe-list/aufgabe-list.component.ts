import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { Aufgabe } from '../../aufgabe';

@Component({
  selector: 'rl-aufgabe-list',
  templateUrl: './aufgabe-list.component.html',
  styleUrls: ['./aufgabe-list.component.css']
})
export class AufgabeListComponent implements OnInit {

  list: Aufgabe[];

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.list = this.usersService.user.done;
  }

}
