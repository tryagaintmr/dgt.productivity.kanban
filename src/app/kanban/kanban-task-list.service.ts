import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KANBAN_TASKS } from './data';
import { IKanbanTask } from './Kanban';

@Injectable({
  providedIn: 'root'
})
export class KanbanTaskListService {

  private tasks: IKanbanTask[] = KANBAN_TASKS;

  constructor() { }

  getTasks(): Observable<IKanbanTask[]> {
    return of(this.tasks);
  }

  addTask(task: IKanbanTask): Observable<IKanbanTask> {
    this.tasks.push(task);
    return of(task);
  }

  updateTask(task: IKanbanTask): Observable<IKanbanTask | null> {
    const index = this.tasks.findIndex(t => t.title === task.title);
    if (index >= 0) {
      this.tasks[index] = task;
      return of(task);
    }
    return of(null);
  }

  deleteTask(task: IKanbanTask): Observable<IKanbanTask | null> {
    const index = this.tasks.findIndex(t => t.title === task.title);
    if (index >= 0) {
      this.tasks.splice(index, 1);
      return of(task);
    }
    return of(null);
  }
}
