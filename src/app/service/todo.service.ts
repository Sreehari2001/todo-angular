import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { Todo } from "../model/Todo";
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() { 
    this.todos = [
      {
          id: '111',
          title: "Learn c++",
          isCompleted: true,
          date: new Date(),
      },
      {
          id: '222',
          title: "Learn React",
          isCompleted: true,
          date: new Date(),
      },
      {
          id: '333',
          title: "Learn Angular",
          isCompleted: false,
          date: new Date(),
      },
    ];
  }
    getTodos() {
      return of(this.todos);
    }

    addTodo(todo: Todo){
      this.todos.push(todo);
    }

    changeStatus(todo: Todo){
      this.todos.map( singleTodo => {
        if(singleTodo.id === todo.id){
          todo.isCompleted = !todo.isCompleted;
        }
      })
    }

    deleteTodo(todo: Todo){
      const indexOfTodo = this.todos.findIndex(
        (currentobj) => currentobj.id === todo.id
      );
      this.todos.splice(indexOfTodo, 1)
    }



}
