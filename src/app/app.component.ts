import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputHint = 'What needs to be done?';
  myColSpan = 2;
  todo: any[] = [];

  add(item: HTMLInputElement) {
    this.todo.push(item.value);
    item.value = '';
  }
}
