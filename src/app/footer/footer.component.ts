import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {

  @Input('todos') myTodos: any[] = [];
  moreThanFive: boolean = false;

  ngOnChanges() {
    if (this.myTodos.length >= 5) {
      this.moreThanFive = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
