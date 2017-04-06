/**
 * Created by yanmeng on 2017/2/22.
 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core'; // 引入装饰器
import { AppService } from "../../../service/app.service";

@Component({
  selector : 'add',
  template : `
    <input 
        class="add-input" 
        type="text" 
        (keyup.enter)="addTodo($event)">`,
  styleUrls: ['add.component.css'],
})
export class AddComponent {
  constructor(private _homeService: AppService) {
  }

  addTodo(e: any) {
    // this.add.emit(e.target.value);
    this._homeService.addTodoList({content: e.target.value});
    e.target.value = '';
  }
}
