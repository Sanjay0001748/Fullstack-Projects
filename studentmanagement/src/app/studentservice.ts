import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentInterface } from './StudentInterface';

@Injectable({
  providedIn: 'root',
})
export class Studentservice {
  constructor(private http: HttpClient) {}

  addStudent(student: StudentInterface) {
    return this.http.post('http://localhost:8080/v2/student/add', student);
  }
  getStudent() {
    return this.http.get('http://localhost:8080/v2/student/get');
  }
  deleteStudent(sid: number) {
    return this.http.delete('http://localhost:8080/v2/student/delete/' + sid);
  }
}
