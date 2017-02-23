import {Component} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'root-app', // 该组件的DOM元素名称
  templateUrl: './app.component.html', // 组件需要的模版
  styleUrls    : []
})
export class AppComponent {
    // Component 为组件模块，通过@Component装饰器来告诉Angular怎样创建这个组件
  // constructor(private router: Router){
  //   console.log('1')
  // }
}
