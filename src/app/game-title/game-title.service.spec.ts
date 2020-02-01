import { TestBed } from '@angular/core/testing';

import { GameTitleService } from './game-title.service';

describe('GameTitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameTitleService = TestBed.get(GameTitleService);
    expect(service).toBeTruthy();
  });
});
