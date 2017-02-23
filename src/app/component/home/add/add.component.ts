/**
 * Created by yanmeng on 2017/2/22.
 */
import { Component, OnInit } from '@angular/core';
import { AppService } from "../../../service/app.service";

@Component({
  selector   : 'add',
  templateUrl: 'add.component.html'
})
export class AddComponent implements OnInit{
  constructor(private _homeService: AppService) {}

  ngOnInit() :void{}

  addOption(e:any) {
    this._homeService.addTodoList({content:e.target.value});
    e.target.value = '';
  }
}
