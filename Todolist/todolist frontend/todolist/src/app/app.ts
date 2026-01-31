import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../todo/todo';
import { Layout } from '../layout/layout';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Todo, Layout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('todolist');
}
