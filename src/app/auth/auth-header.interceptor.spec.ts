import { TestBed } from '@angular/core/testing';

import { AuthHeaderInterceptor } from './auth-header.interceptor';

describe('AuthHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthHeaderInterceptor = TestBed.get(AuthHeaderInterceptor);
    expect(service).toBeTruthy();
  });
});
