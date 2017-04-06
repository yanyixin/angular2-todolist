

import { Component } from "@angular/core";

@Component({
  selector   : 'root-app', // 该组件的DOM元素名称
  templateUrl: './app.component.html', // 组件需要的模版
  styleUrls  : ['./app.component.css'] // 组件需要的样式
})
export class AppComponent {
  // Component 为组件模块，通过@Component装饰器来告诉Angular怎样创建这个组件
  constructor() {
    console.log('装饰器', this);
  }
}






