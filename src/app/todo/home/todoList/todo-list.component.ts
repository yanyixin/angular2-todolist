/**
 * Created by yanmeng on 2017/2/22.
 */
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ListContent } from "../../../interface/home.types";

@Component({
  selector   : 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  @Input() options: Array<ListContent>;

  @Output() checkoutDetail = new EventEmitter();
  constructor( private router:Router) {

  }
  ngOnInit() {
    console.log(this.options);
  }

  // lookDetail(value: ListContent) {
  //   this.checkoutDetail.emit(value);
  //   this.router.navigate(['todo/detail'])
  // }
  lookDetail(value: ListContent) {
    console.log(value);
    this.router.navigate(['todo/detail',value.id])
  }
}


