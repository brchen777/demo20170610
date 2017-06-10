import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputHint = 'What needs to be done?';
  myColSpan = 2;
  todos: any[] = [];

  addTodo(evt: KeyboardEvent) {

    let input = evt.target as HTMLInputElement;
    if (input.value) {
      this.todos = [...this.todos, input.value];
      input.value = '';
    }
  }
}
