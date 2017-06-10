import { FooterComponent } from './footer/footer.component';
import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/rx';
import { Observable } from 'rxjs/Observable';

const BASE_URL: string = 'http://localhost:3000/todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('myFooter') footer: FooterComponent;
  inputHint = 'What needs to be done?';
  myColSpan = 2;
  todo: string;
  todos: any[] = [];
  selectedType = 'all';
  isToggleAll: boolean;

  constructor(private http: Http) {
    this.getTodos().subscribe(data => this.todos = data);
  }

  getTodos(): Observable<any[]> {
    return this.http.get(BASE_URL)
      .map(data => data.json());
  }

  addTodo() {
    if (this.todo) {
      this.http.post(BASE_URL, { todo: this.todo, done: false })
        .concatMap(data => this.getTodos())
        .subscribe(data => this.todos = data);
      this.todo = '';
    }

    this.footer.printHello();
  }

  clearCompleted() {
    let obs: any[] = [];

    this.todos.forEach(data => {
      let req = this.http.delete(`${BASE_URL}/${data.id}`);
      obs.push(req);
    });

    Observable.forkJoin(obs)
      .concatMap(data => this.getTodos())
      .subscribe(data => this.todos = data);
  }

  selectTypeChanged(evt) {
    this.selectedType = evt;
  }

  toggleAll() {
    this.isToggleAll = !this.isToggleAll;
    this.todos = this.todos.map(data => {
      return {todo: data.todo, done: this.isToggleAll};
    });
  }

  deleteTodo(item) {
    this.http.delete(`${BASE_URL}/${item.id}`)
    .concatMap(data => this.getTodos())
    .subscribe(data => this.todos = data);
  }

  toggleSingleTodo(item) {
    this.http.put(`${BASE_URL}/${item.id}`, { done: item.done, todo: item.todo })
    .concatMap(data => this.getTodos())
    .subscribe(data => this.todos = data);
  }
}
