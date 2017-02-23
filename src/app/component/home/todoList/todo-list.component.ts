/**
 * Created by yanmeng on 2017/2/22.
 */
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ListConent } from "../../../interface/home.types";

@Component({
  selector   : 'todo-list',
  templateUrl: 'todo-list.component.html'
})
export class TodoListComponent implements OnInit{
  @Input() options: Array<ListConent>;
  @Output() checkoutDetail = new EventEmitter();
  constructor() {

  }
  ngOnInit() {
    console.log(this.options);
  }
  lookDetail() {
    this.checkoutDetail.emit();
  }


}


