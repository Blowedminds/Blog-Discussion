import { TestBed, inject } from '@angular/core/testing';

import { ChatRequestService } from './chat-request.service';

describe('ChatRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatRequestService]
    });
  });

  it('should be created', inject([ChatRequestService], (service: ChatRequestService) => {
    expect(service).toBeTruthy();
  }));
});
