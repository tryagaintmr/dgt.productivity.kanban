import { TestBed } from '@angular/core/testing';

import { KanbanListMockService } from './kanban-list-mock.service';

describe('KanbanListMockService', () => {
  let service: KanbanListMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanListMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
