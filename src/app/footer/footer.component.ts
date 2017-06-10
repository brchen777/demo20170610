import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() set todos(value) {
    this._todos = value;
  }

  private _todos: any[] = [];
  get todos() {
    return this._todos;
  }

  constructor() { }

  ngOnInit() {
  }

}
