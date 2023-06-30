import { Test, TestingModule } from '@nestjs/testing';
import { PkdQueryService } from './pkd-query.service';

describe('PkdQueryService', () => {
  let service: PkdQueryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PkdQueryService],
    }).compile();

    service = module.get<PkdQueryService>(PkdQueryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should ', () => {
    expect(service).toBeDefined();
  });
});
