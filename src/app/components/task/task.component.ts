import { Component, inject, signal } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilterType, TaskModel } from '../models/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  tasksList = signal<TaskModel[]>([
    { id: 1, name: 'Run', done: false },
    { id: 2, name: 'Swim', done: false },
    { id: 3, name: 'Dance', done: false },
  ]);

  filterTask = signal<FilterType>('all');

  newTask = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)],
  });

  private _taskService = inject(TasksService);

  // this.tasksList = this._taskService.getTasks();

  changeFilter(filterString: FilterType) {
    this.filterTask.set(filterString);
  }

  deleteTask(taskIndex: number): void {
    console.log('deleteTask', taskIndex);
    this._taskService.deleteTask(taskIndex);
    this.tasksList = this._taskService.getTasks();
  }

  addTask() {
    const taskInput = this.newTask.value.trim();
    console.log('addTask', taskInput);
    if (this.newTask.valid && taskInput !== '') {
      this.tasksList.update((prev_tasks) => {
        return [
          ...prev_tasks,
          {
            id: prev_tasks.length + 1,
            name: taskInput,
            done: false,
          },
        ];
      });
      this.newTask.reset();
    } else {
      this.newTask.reset();
    }
  }

  toggleTask(taskID: number) {
    return this.tasksList.update((prev_tasks) =>
      prev_tasks.map((task) => {
        return task.id === taskID ? { ...task, done: !task.done } : task;
      })
    );
  }
}
