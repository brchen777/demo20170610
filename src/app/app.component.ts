import { FooterComponent } from './footer/footer.component';
import { Component, ViewChild } from '@angular/core';

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
}
