import { Component, OnInit, ElementRef, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { User } from 'src/app/user';
import { UsersService } from '../../users.service';

@Component({
  selector: 'rl-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit, AfterViewInit {

  liste: User[];
  newUser = false;

  @ViewChildren('other')
  ref: QueryList<ElementRef<HTMLInputElement>>;

  constructor(public usersService: UsersService) { }

  ngAfterViewInit(): void {
    this.ref.changes.subscribe((next: QueryList<ElementRef<HTMLInputElement>>) => {
      const n = next.toArray();
      if (n[0]) {
        n[0].nativeElement.focus();
    }
    });
  }
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
