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
        (keyup.enter)="addOption($event)">`,
  styleUrls: ['add.component.css'],
  providers: [AppService]
})
export class AddComponent {
  @Output() add = new EventEmitter<string>();

  constructor(private _homeService: AppService) {
  }

  addOption(e: any) {
    // console.log(this.add);
    // this.add.emit(e.target.value);
    // console.log('e',e.target.value);
    this._homeService.addTodoList({content: e.target.value});
    e.target.value = '';
  }

  checkName() {

  }
}
