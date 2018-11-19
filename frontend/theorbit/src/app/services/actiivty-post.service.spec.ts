import { TestBed, inject } from '@angular/core/testing';

import { ActiivtyPostService } from './actiivty-post.service';

describe('ActiivtyPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiivtyPostService]
    });
  });

  it('should be created', inject([ActiivtyPostService], (service: ActiivtyPostService) => {
    expect(service).toBeTruthy();
  }));
});
