import { TestBed } from '@angular/core/testing';

import { OrgrepService } from './orgrep.service';

describe('OrgrepService', () => {
  let service: OrgrepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgrepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
