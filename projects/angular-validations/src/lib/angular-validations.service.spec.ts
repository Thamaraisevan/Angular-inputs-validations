import { TestBed } from '@angular/core/testing';

import { AngularValidationsService } from './angular-validations.service';

describe('AngularValidationsService', () => {
  let service: AngularValidationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularValidationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
