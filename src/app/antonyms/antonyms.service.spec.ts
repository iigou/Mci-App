import { TestBed } from '@angular/core/testing';

import { AntonymsService } from './antonyms.service';

describe('AntonymsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AntonymsService = TestBed.get(AntonymsService);
    expect(service).toBeTruthy();
  });
});
