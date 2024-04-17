import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private lStorageKey = 'tasksList';

  constructor() {}

  getTasks() {
    if (typeof localStorage !== 'undefined') {
      // Código que usa localStorage
      return JSON.parse(localStorage.getItem(this.lStorageKey) as string) || [];
    } else {
      console.error('localStorage is not available.');
    }
  }

  addTask(task: string) {
    const tasks = this.getTasks();
    tasks.push(task);
    if (typeof localStorage !== 'undefined') {
      // Código que usa localStorage
      localStorage.setItem(this.lStorageKey, JSON.stringify(tasks));
    } else {
      console.error('localStorage is not available.');
    }
  }

  deleteTask(taskIndex: number) {
    if (typeof localStorage !== 'undefined') {
      // Código que usa localStorage
      const tasks = this.getTasks();
      tasks.splice(taskIndex, 1);
      localStorage.setItem(this.lStorageKey, JSON.stringify(tasks));
    } else {
      console.error('localStorage is not available.');
    }
  }
}
