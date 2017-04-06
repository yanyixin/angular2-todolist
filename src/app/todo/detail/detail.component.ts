/**
 * Created by yanmeng on 2017/2/21.
 */
import { Component, OnInit } from '@angular/core';
import { AppService } from "../../service/app.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ListContent } from "../../interface/home.types";

@Component({
  selector: 'home', // 该组件的DOM元素名称
  templateUrl: './detail.component.html', // 组件需要的模版
  styleUrls    : ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  // Component 为组件模块，通过@Component装饰器来告诉Angular怎样创建这个组件

  private options:ListContent;

  constructor(
    private route: ActivatedRoute,
    private _appService: AppService,
    private router:Router
  ){}

  ngOnInit() {
    let todoId = +this.route.snapshot.params['id'];
    this.options = this._appService.getTodoDetailById(todoId);
  }

  goTodoList() {
      this.router.navigate(['todo/home'])
  }

}
