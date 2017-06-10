import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputHint = 'What needs to be done?';
  myColSpan = 2;
  todo: string;
  todos: any[] = [];

  addTodo() {
    if (this.todo) {
      this.todos = [...this.todos, {todo: this.todo, done: false}];
      this.todo = '';
    }
  }

  clearCompleted() {
    this.todos = this.todos.filter(data => !data.done);
  }
}
