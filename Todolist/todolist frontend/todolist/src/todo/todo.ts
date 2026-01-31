import { Component } from '@angular/core';
import { task } from '../Task/task';
import { NgForm } from '@angular/forms';
import { Todoservice } from '../todoservice';
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

  selectedTask: task | null = null; // Track which task is being edited

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
          alert('task added successfully');
        } else {
          console.error('Failed to add task:', response.message);
        }
      },
      (error) => {
        console.error('Error adding task:', error);
      },
    );
  }

  // Select a task for editing
  selectTask(task: task) {
    this.selectedTask = { ...task }; // Create a copy to edit
    this.taskList = { ...task }; // Load task data into form
  }

  // Update existing task
  updateTask() {
    if (!this.selectedTask) {
      console.error('No task selected for update');
      return;
    }

    // Merge the form data with the selected task
    const updatedTask: task = {
      id: this.selectedTask.id,
      title: this.taskList.title || this.selectedTask.title,
      description: this.taskList.description || this.selectedTask.description,
    };

    this.todoService.updateTask(updatedTask).subscribe(
      (response: any) => {
        if (response.success) {
          // Update the task in the collection
          const index = this.tasksCollection.findIndex((t) => t.id === updatedTask.id);
          if (index !== -1) {
            this.tasksCollection[index] = response.data || updatedTask;
          }
          // Reset form and selection
          this.taskList = { title: '', description: '' };
          this.selectedTask = null;
          console.log('Task updated successfully:', response.data);
          alert('Task updated successfully');
        } else {
          console.error('Failed to update task:', response.message);
        }
      },
      (error) => {
        console.error('Error updating task:', error);
      },
    );
  }
}
