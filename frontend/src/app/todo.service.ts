import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient : HttpClient) { }

  getTodos() : Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('http://localhost:5001/api/todos');
  }

  getTodoById(id : number) : Observable<Todo> {
    return this.httpClient.get<Todo>(`http://localhost:5001/api/todos/${id}`);
  }

  save(todo : Todo) : Observable<Todo> {
    if (todo.id) {
      return this.httpClient.put<Todo>(`http://localhost:5001/api/todos/${todo.id}`, todo);
    } else {
      return this.httpClient.post<Todo>('http://localhost:5001/api/todos', todo);
    }
  }

  delete(id : number) : Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:5001/api/todos/${id}`);
  }
}
