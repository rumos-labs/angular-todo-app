import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    TodoDetailComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos : Todo[] = [];

  constructor(private todoService : TodoService) {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((todos : Todo[]) => {
      this.todos = todos;
    });
  }

  delete(id : number) {
    this.todoService
      .delete(id)
      .subscribe(() => {
        this.getTodos();
      });
  }
}
