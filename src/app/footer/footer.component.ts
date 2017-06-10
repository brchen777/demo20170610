import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() set todos(value) {
    this._todos = value;
  }

  @Output() onClearCompleted = new EventEmitter();

  selectedType = 'all';
  @Output() onselectTypeChanged = new EventEmitter();

  private _todos: any[] = [];
  get todos() {
    return this._todos;
  }

  clearCompleted() {
    this.onClearCompleted.emit();
  }

  printHello() {
    console.log('hello');
  }

  selectTypeChanged(type) {
    this.selectedType = type;
    this.onselectTypeChanged.emit(type);
  }

  constructor() { }

  ngOnInit() {
  }

}
