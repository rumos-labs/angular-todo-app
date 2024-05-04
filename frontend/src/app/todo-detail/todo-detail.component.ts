import { Component } from '@angular/core';
import { Todo } from '../todo';
import { CommonModule, Location, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css',
})
export class TodoDetailComponent {
  todo: Todo = {
    id: undefined,
    name: '',
    isCompleted: false,
  };
  isNew : boolean = true;

  constructor(private router: ActivatedRoute,
              private todoService: TodoService,
              private location : Location) {
    const id = router.snapshot.paramMap.get('id');

    if (id) {
      todoService.getTodoById(parseInt(id)).subscribe((todo) => {
        this.todo = todo;
        this.isNew = false;
      });
    }
  }

  onSubmit() {
    this.todoService
      .save(this.todo)
      .subscribe(() => this.location.back());
  }
}
