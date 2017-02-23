/**
 * Created by yanmeng on 2017/2/22.
 */
import { Injectable } from "@angular/core";
import { ListConent } from "../interface/home.types";

@Injectable()
export class AppService {
  public todoLists: Array<ListConent> = [{
    id: 1,
    content: 'es6'
  },{
    id: 2,
    content: 'React'
  }, {
    id: 3,
    content: 'Angular2'
  }];

  addTodoList(list: ListConent) {
    console.log('list',list);
    if(!list.id) {
      list.id = this.todoLists.length
    }
    this.todoLists.push(list);
  }

}