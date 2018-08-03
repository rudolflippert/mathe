import { Injectable } from '@angular/core';
import { User } from './user';
import { Aufgabe } from './aufgabe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  data: User[];
  user: User;

  private url = 'http://192.168.13.31:3000/';

  constructor(private http: HttpClient) {
    this.data = []; /*[
      { name: 'Mama' },
      { name: 'Papa' },
      { name: 'Tobi' },
      {
        name: 'Benjamin', todo: [],
        done: [],
        right: 0,
        wrong: 0
      },
      { name: 'Maria' },
      { name: 'David' },
      { name: 'Jakob' },
    ] as User[];*/

  }

  getUsers(): void {
    this.http.get(this.url+'users').subscribe((data: User[]) => {
      this.data.push(...data)});
  }

  store() {
    this.http.put<User>(this.url+'users/'+this.user.id, this.user).subscribe(x => {
      console.log(x)});
  }

  onSelect(user: User) {
    this.user = user;
    if (!this.user.todo.length) {
      this.newTodos();
    }
  }

  respond(answer: number) {
    let aufgabe = this.user.todo[0];
    this.user.todo.reverse();
    this.user.todo.pop();
    this.user.todo.reverse();
    aufgabe.erg = answer;
    this.user.done.push(aufgabe);
    if (aufgabe.n1*aufgabe.n2==aufgabe.erg) {
      this.user.right++;
    } else {
      this.user.wrong++;
      this.user.todo.push(new Aufgabe(aufgabe.n1, aufgabe.n2));
    }
    if (!this.user.todo.length) {
      this.newTodos();
    }
    this.store();
  }

  newTodos() {
    let newTodo: Aufgabe[] = [];
    let n = Math.ceil(Math.random() * 10);
    for (let i = 1; i <= 10; i++) {
      newTodo.push(new Aufgabe(i, n));
    }
    this.user.todo = shuffle(newTodo);
  }

  getScore() {
    return this.user.right-this.user.wrong;
  }
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}