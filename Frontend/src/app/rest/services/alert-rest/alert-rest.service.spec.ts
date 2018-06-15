import { TestBed, inject } from '@angular/core/testing';

import { AlertRestService } from './alert-rest.service';

describe('AlertRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertRestService]
    });
  });

  it('should be created', inject([AlertRestService], (service: AlertRestService) => {
    expect(service).toBeTruthy();
  }));
});
