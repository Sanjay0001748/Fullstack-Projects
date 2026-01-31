import { Routes } from '@angular/router';
import { Todo } from '../todo/todo';
import { Layout } from '../layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Todo,
      },
      {
        path: 'users',
        component: Todo,
      },
      {
        path: 'settings',
        component: Todo,
      },
    ],
  },
];
