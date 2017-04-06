/**
 * Created by yanmeng on 2017/2/22.
 */
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ListContent } from "../../../interface/home.types";
import { AppService } from "../../../service/app.service";

@Component({
  selector   : 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  private options: Array<ListContent>;
  constructor( private router:Router,private _homeService: AppService) {
    this._homeService.todoListService$.subscribe((e:any) => {
      this.options  = e;
    })
  }
  ngOnInit() {
    this.options  = this._homeService.getTodos();
  }

  lookDetail(value: ListContent) {
    this.router.navigate(['todo/detail',value.id])
  }
}


