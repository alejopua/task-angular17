import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
