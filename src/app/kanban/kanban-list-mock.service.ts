import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KANBANS } from './data';
import { IKanbanService } from './Ikanban-list';
import { IKanban } from './Kanban';

@Injectable({
  providedIn: 'root'
})
export class KanbanServiceMock implements IKanbanService {

  getAllKanbans(): Observable<IKanban[]> {
    return of(KANBANS);
  }

  getKanbanById(id: number): Observable<IKanban | undefined> {
    const kanban = KANBANS.find(k => k.id === id);
    return of(kanban);
  }

  getKanbansByTitleContains(term: string): Observable<IKanban[]> {
    const kanbans = KANBANS.filter(k => k.title.toLowerCase().includes(term.toLowerCase()));
    return of(kanbans);
  }

  addKanban(kanban: IKanban): Observable<IKanban> {
    const newKanban: IKanban = {
      id: KANBANS.length + 1,
      title: kanban.title,
      description: kanban.description,
      createdDate: new Date().toISOString(),
      createdBy: { ID: 1, EMail: 'johndoe@example.com', Title: 'John Doe' },
      lastModifiedDate: new Date().toISOString(),
      lastModifiedBy: { ID: 1, EMail: 'johndoe@example.com', Title: 'John Doe' }
    };

    KANBANS.push(newKanban);

    return of(newKanban);
  }

  deleteKanban(id: number): Observable<void> {
    const index = KANBANS.findIndex(k => k.id === id);
    if (index >= 0) {
      KANBANS.splice(index, 1);
    }

    return of();
  }


}
