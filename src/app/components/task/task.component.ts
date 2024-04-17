import { Component, inject, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
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
