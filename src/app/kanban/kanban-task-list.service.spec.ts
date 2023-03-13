import { TestBed } from '@angular/core/testing';

import { KanbanTaskListService } from './kanban-task-list.service';

describe('KanbanTaskListService', () => {
  let service: KanbanTaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanTaskListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
