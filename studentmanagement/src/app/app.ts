import { Component, signal } from '@angular/core';
import { Student } from './student/student';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Student],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('studentmanagement');
}
