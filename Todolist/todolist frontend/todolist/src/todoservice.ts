import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { task } from './Task/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Todoservice {
  constructor(private http: HttpClient) {}

  addTask(task: task): Observable<any> {
    return this.http.post('http://localhost:8080/v2/task/add', task);
  }

  getTasks(): Observable<any> {
    return this.http.get('http://localhost:8080/v2/task/get');
  }
  updateTask(task: task): Observable<any> {
    console.log(task);
    return this.http.put('http://localhost:8080/v2/task/update/' + task.id, task);
  }
}
