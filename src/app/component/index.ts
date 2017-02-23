/**
 * Created by yanmeng on 2017/2/22.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    BrowserModule,
    FormsModule,
    RouterModule,
    CommonModule
  ], // 导入当前模块所需要的其他模块
  providers   : [AppService],
  exports     : [HomeComponent]
})
export class TodoModule {
}
export { HomeComponent, DetailComponent }