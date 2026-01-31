import { Component, OnInit } from '@angular/core';
import { StudentInterface } from '../StudentInterface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Studentservice } from '../studentservice';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.html',
  styleUrls: ['./student.css'],
})
export class Student implements OnInit {
  ngOnInit(): void {
    this.loadStudent();
  }
  success!: boolean;
  showform: boolean = false;
  showStudentForm() {
    this.showform = true;
  }
  studentData: StudentInterface = {
    firstName: '',
    lastName: '',
    classStudent: 0,
    section: '',
    bloodGroup: '',
  };

  closeForm() {
    this.addStudent();
    this.showform = false;
  }

  constructor(private studentService: Studentservice) {}
  students: StudentInterface[] = [];

  newStudent: StudentInterface = {
    firstName: '',
    lastName: '',
    classStudent: 1,
    section: '',
    bloodGroup: '',
  };

  addStudent() {
    this.studentService.addStudent(this.studentData).subscribe(
      (response: any) => {
        if (response.success) {
          this.success = true;
          this.loadStudent();
        }
      },
      (error) => {
        console.log(error);
      },
    );
  }
  loadStudent() {
    this.studentService.getStudent().subscribe(
      (response: any) => {
        if (response.success) {
          console.log(response.data);
          this.students = response.data;
        }
      },
      (error) => {
        console.log(error);
      },
    );
  }
  deleteStudent(student: StudentInterface) {
    if (!student?.id) {
      console.warn('Invalid student id', student);
      return;
    }

    this.studentService.deleteStudent(student.id).subscribe(
      (response: any) => {
        if (response.success) {
          this.success = true;
          console.log('Deleted student', student.id, response);
          this.loadStudent();
        }
      },
      (error: any) => {
        console.error('Delete failed', error);
      },
    );
  }
}
