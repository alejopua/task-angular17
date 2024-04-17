import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'taskApp';
  tasksList: string[] = [];
  newTask: string = '';

  private _taskService = inject(TasksService);

  ngOnInit(): void {
    this.tasksList = this._taskService.getTasks();
  }

  deleteTask(taskIndex: number): void {
    console.log('deleteTask', taskIndex);
    this._taskService.deleteTask(taskIndex);
    this.tasksList = this._taskService.getTasks();
  }

  addTask(newTask: string): void {
    this._taskService.addTask(newTask);
    this.newTask = '';
    this.tasksList = this._taskService.getTasks();
  }
}
