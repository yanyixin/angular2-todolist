/**
 * Created by yanmeng on 2017/2/22.
 */
import { Injectable } from "@angular/core";
import { ListContent } from "../interface/home.types";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable()  // 该装饰的类依赖了其他的服务
export class AppService {
  private todoListService: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public todoListService$ = this.todoListService.asObservable();

  public todoLists: Array<ListContent> = [{
    id     : 0,
    content: 'es6'
  }, {
    id     : 1,
    content: 'React'
  }, {
    id     : 2,
    content: 'Angular2'
  }];

  constructor() {

  }



  addTodoList(list: ListContent) {
    if (!list.id) {
      list.id = this.todoLists.length
    }
    this.todoLists.push(list);
    this.todoListService.next(this.todoLists);
  }

  getTodos() {
    return this.todoLists;
  }

  getTodoDetailById(id: number) {
    return this.todoLists.filter(todoList => todoList.id === id).pop();
  }
}
