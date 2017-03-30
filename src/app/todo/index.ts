/**
 * Created by yanmeng on 2017/2/22.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { DetailComponent } from './detail';
import { CommonModule } from "@angular/common";
import { AppService } from "../service/app.service";
import { AddComponent } from "./home/add/add.component";
import { TodoListComponent } from "./home/todoList/todo-list.component";

@NgModule({ // @NgModule 用来定义模块用的装饰器
  declarations: [HomeComponent, AddComponent, TodoListComponent,DetailComponent], // 导入模块所依赖的组件、指令等
  imports     : [
    RouterModule, // 封装路由相关的组件指令等
    CommonModule // 封装一些常用的内置指令和内置管道等
  ], // 导入当前模块所需要的其他模块
  providers   : [AppService], // 服务的创建者
  exports     : [HomeComponent, DetailComponent] // 模块的公开API
})
export class TodoModule { }
export { HomeComponent, DetailComponent }