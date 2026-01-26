import { Component } from '@angular/core';
import { task } from '../Task/task';
import { NgForm } from '@angular/forms';
import { Todoservice } from '../todoservice';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  constructor(private todoService: Todoservice) {}

  tasksCollection: task[] = [];

  taskList: task = {
    title: '',
    description: '',
  };

  // Load all tasks when component initializes
  ngOnInit() {
    this.loadTasks();
  }

  // Fetch and assign tasks from API
  loadTasks() {
    this.todoService.getTasks().subscribe(
      (response: any) => {
        if (response.success) {
          this.tasksCollection = response.data; // Assign API data to tasksCollection
          console.log('Tasks loaded:', this.tasksCollection);
        } else {
          console.error('Failed to load tasks:', response.message);
        }
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      },
    );
  }

  // Add a new task
  addTask() {
    this.todoService.addTask(this.taskList).subscribe(
      (response: any) => {
        if (response.success) {
          // Add the new task to the collection
          this.tasksCollection.push(response.data);
          // Reset the form
          this.taskList = { title: '', description: '' };
          console.log('Task added successfully:', response.data);
        } else {
          console.error('Failed to add task:', response.message);
        }
      },
      (error) => {
        console.error('Error adding task:', error);
      },
    );
  }
}
