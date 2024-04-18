import { Component, inject, OnInit, signal } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterType, TaskModel } from '../models/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  tasksList = signal<TaskModel[]>([
    { id: 1, name: 'Run', done: false },
    { id: 2, name: 'Swim', done: false },
    { id: 3, name: 'Dance', done: false },
  ]);

  filterTask = signal<FilterType>('all');

  newTask: string = '';

  private _taskService = inject(TasksService);

  ngOnInit(): void {
    this.tasksList = this._taskService.getTasks();
  }

  changeFilter(filterString: FilterType) {
    this.filterTask.set(filterString);
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
