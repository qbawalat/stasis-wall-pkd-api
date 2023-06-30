import { Test, TestingModule } from '@nestjs/testing';
import { PkdQueryController } from './pkd-query.controller';
import { PkdQueryService } from './pkd-query.service';

describe('PkdQueryController', () => {
  let controller: PkdQueryController;
  let service: PkdQueryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PkdQueryController],
      providers: [PkdQueryService],
    }).compile();

    controller = module.get<PkdQueryController>(PkdQueryController);
    service = module.get(PkdQueryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should inject pkd-query service', () => {
    expect(service).toBeDefined();
  });
});
