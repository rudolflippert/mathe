import * as $ from 'jquery';

class Aufgabe {
    n1: number;
    n2: number;
    erg: number;
    constructor(n1: number, n2: number) {
        this.n1 = n1;
        this.n2 = n2;
    }
}

class AufgabeWrap {

    aufgabe: Aufgabe;

    constructor(n1: number, n2: number) {
        this.aufgabe = new Aufgabe(n1, n2);
    }

    static isRight(aufgabe: Aufgabe): boolean {
        return aufgabe.n1*aufgabe.n2==aufgabe.erg;
    }

    get right(): boolean {
        return AufgabeWrap.isRight(this.aufgabe);
    }

    toString(): string {
        return this.aufgabe.n1 + ' * ' + this.aufgabe.n2 + ' = ';
    }
}

class UserWrap {
    user: User;

    constructor(u: User) {
        this.user = u;
    }

    newTodos() {
        let newTodo: Aufgabe[] = [];
        let n = Math.ceil(Math.random()*10);
        for (let i=1; i<=10; i++) {
            newTodo.push(new Aufgabe(i, n));
        }
        this.user.todo = shuffle(newTodo);
        this.store();
    }

    store() {
        $.ajax({
            type:'PUT',
            url:'http://localhost:3001/users/' + this.user.id,
        dataType: 'json',
    data: this.user});
    }
    respond(data: number) {
        this.user.todo[0].erg = data;
        if (AufgabeWrap.isRight(this.user.todo[0])) {
            this.user.right++;
        } else {
            this.user.wrong++;
        }
        console.log(this.user.todo);
        this.user.todo.reverse();
        this.user.todo.pop();
        this.user.todo.reverse();
        console.log(this.user.todo);
//        this.store();
        showStats();
        this.showNext();
    }

    showNext() {
        if (this.user.todo.length==0) {
            this.newTodos();
        }
        $('#aufgabe div').text(new AufgabeWrap(user.todo[0].n1, user.todo[0].n2).toString());    
        $('#ergebnis').val('');
    }

}

class User {
    id: number;
    name: string;
    right: number;
    wrong: number;
    todo: Aufgabe[];
    done: Aufgabe[];
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

$('#aufgabe').hide();
$('#previous').hide();
$('#username').click(logoff);
let users: User[];
let user: User = new User();
$.get('http://localhost:3001/users').done(result => {
    users = result;
    $.each(users, (index, value) => {
        $(`<li>${value.name}</li>`)
            .appendTo($('#who ul'))
            .click(evt => {
                logon($(evt.target).text());
            });
    });
});
function logon(username: string) {
    $('#who').hide();
    $('#aufgabe').show();
    $('#previous').show();
    $('#username').text(username);
    $.each(users, (index, value: User) => {
        if (value.name == username) {
            user = value;
        }
    });
    debugger;
    new UserWrap(user).store();
    showStats();
    new UserWrap(user).showNext();
}
function logoff() {
    $('#who').show();
    $('#aufgabe').hide();
    $('#previous').hide();
    $('#username').text('');
    $('#score').text('');
    $('#right').text('');
    $('#wrong').text('');
}
$('#ergebnis').keydown((evt) => {
    if (evt.keyCode==13)
    new UserWrap(user).respond(parseInt($('#ergebnis').val() as string));
});
function showStats() {
    $('#score').text(user.right - user.wrong);
    $('#right').text(user.right);
    $('#wrong').text(user.wrong);
}