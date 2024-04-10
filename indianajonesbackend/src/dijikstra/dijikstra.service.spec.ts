import { Test, TestingModule } from '@nestjs/testing';
import { DijikstraService } from './dijikstra.service';

describe('DijikstraService', () => {
  let service: DijikstraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DijikstraService],
    }).compile();

    service = module.get<DijikstraService>(DijikstraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
