import { Injectable } from '@angular/core';
import { User } from './user';
import { Aufgabe } from './aufgabe';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  data: User[];
  user: User;

  private url = environment.apiUrl;

  constructor(private http: HttpClient) {
    // Dummy-Daten erzeugen, falls HTTP nicht verfügbar ist
    this.data = [
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
    ] as User[];
    this.getUsers();
  }

  getUsers(): void {
    // Bestehende Liste mit HTTP-Daten ersetzen
    this.http.get(this.url+'users').subscribe((data: User[]) => {
      this.data.splice(0);
      this.data.push(...data)});
  }

  store() {
    // Liste auf HTTP pushen
    this.http.put<User>(this.url+'users/'+this.user.id, this.user).subscribe();
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

}

function shuffle(array: Aufgabe[]) {
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
