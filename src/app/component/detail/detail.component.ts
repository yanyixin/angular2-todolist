/**
 * Created by yanmeng on 2017/2/21.
 */
import { Component, OnInit } from '@angular/core';
import { AppService } from "../../service/app.service";

@Component({
  selector: 'home', // 该组件的DOM元素名称
  templateUrl: './detail.component.html', // 组件需要的模版
  styleUrls    : []
})
export class DetailComponent implements OnInit{
  // Component 为组件模块，通过@Component装饰器来告诉Angular怎样创建这个组件

  // private options:Array<ListConent>;

  constructor(private _appService: AppService){}
  ngOnInit() {
    // this.options = this._homeService.todoLists;
  }
}
