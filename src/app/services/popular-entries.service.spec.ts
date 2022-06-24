import { TestBed } from '@angular/core/testing';

import { PopularEntriesService } from './popular-entries.service';

describe('PopularEntriesService', () => {
  let service: PopularEntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularEntriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
