import { FooterComponent } from './footer/footer.component';
import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

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
  }

  addTodo() {
    if (this.todo) {
      this.todos = [...this.todos, {todo: this.todo, done: false}];
      this.todo = '';
    }

    this.footer.printHello();
  }

  clearCompleted() {
    this.todos = this.todos.filter(data => !data.done);
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
    this.todos = this.todos.filter(data => item !== data);
  }
}
