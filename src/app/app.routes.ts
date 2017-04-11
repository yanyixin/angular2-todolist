/**
 * Created by yanmeng on 2017/2/21.
 */
// import {Routes} from '@angular/router';
import { HomeComponent, DetailComponent } from './todo';
import { Routes } from "@angular/router";
export const routes: Routes = [ // Routes类型的数组
  {
    path     : 'todo/home',
    component: HomeComponent
  }, {
    path     : 'todo/detail/:id',
    component: DetailComponent
  },{
    path      : '',
    redirectTo: '/todo/home',
    pathMatch : 'full'
  }
];
