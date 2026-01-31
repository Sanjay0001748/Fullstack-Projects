import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-layout',
  imports: [RouterModule, CommonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  collapsed = false;

  toggle() {
    this.collapsed = !this.collapsed;
  }
}
