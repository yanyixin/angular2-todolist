/**
 * Created by yanmeng on 2017/2/21.
 */
import { Component, OnInit, Inject } from '@angular/core';
import { ListContent } from '../../interface/home.types';
import { AppService } from "../../service/app.service";

@Component({
  selector   : 'home', // 该组件的DOM元素名称
  templateUrl: './home.component.html', // 组件需要的模版
  styleUrls  : ['./home.component.css'],
})
export class HomeComponent{
  // Component 为组件模块，通过@Component装饰器来告诉Angular怎样创建这个组件
  constructor() {
  }
}
