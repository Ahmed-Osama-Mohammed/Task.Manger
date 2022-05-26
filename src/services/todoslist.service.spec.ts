import { TestBed } from '@angular/core/testing';

import { TodoslistService } from './todoslist.service';

describe('TodoslistService', () => {
  let service: TodoslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
