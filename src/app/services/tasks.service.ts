import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private lStorageKey = 'tasksList';

  constructor() {}

  getTasks() {
    return JSON.parse(localStorage.getItem(this.lStorageKey) as string) || [];
  }

  addTask(task: string) {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(this.lStorageKey, JSON.stringify(tasks));
  }

  deleteTask(task: string) {
    const tasks = this.getTasks();
    tasks.splice(task, 1);
    localStorage.setItem(this.lStorageKey, JSON.stringify(tasks));
  }
}
