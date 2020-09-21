import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo';
import {TodoService} from '../../services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor( private todoservice:TodoService) { }

  ngOnInit(): void {
     this.todos =this.todoservice.getTodos();
  }

}
