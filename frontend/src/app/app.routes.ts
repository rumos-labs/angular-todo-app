import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

export const routes: Routes = [
    { path: 'todos', component: TodosComponent },
    { path: 'todos/edit/:id', component: TodoDetailComponent },
    { path: 'todos/new', component: TodoDetailComponent },
    { path: '**', redirectTo: 'todos'}
];
