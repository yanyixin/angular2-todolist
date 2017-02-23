/**
 * Created by yanmeng on 2017/2/21.
 */
import {Routes} from '@angular/router';
import {HomeComponent, DetailComponent} from './component';
export const routes: Routes = [ // Routes类型的数组
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
