/**
 * Created by yanmeng on 2017/2/22.
 */
import { Injectable } from "@angular/core";
import { ListContent } from "../interface/home.types";

@Injectable()  // 该装饰的类依赖了其他的服务
export class AppService {
  public todoLists: Array<ListContent> = [{
    id: 0,
    content: 'es6'
  },{
    id: 1,
    content: 'React'
  }, {
    id: 2,
    content: 'Angular2'
  }];

  constructor() {

  }

  addTodoList(list: ListContent) {
    if(!list.id) {
      list.id = this.todoLists.length
    }
    this.todoLists.push(list);
    console.log('this.todoLists',this.todoLists);
  }

  getTodoDetailById(id: number) {
    return this.todoLists.filter(todoList => todoList.id === id).pop();
  }
}
