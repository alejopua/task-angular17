import { Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';

export const routes: Routes = [
  { path: 'task', component: TaskComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'task' },
];
