import { CountingService } from './counting.service';

describe('CountingService', () => {
  let service: CountingService;

  beforeEach(() => {
    service = new CountingService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
