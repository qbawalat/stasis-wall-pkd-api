import { Test, TestingModule } from '@nestjs/testing';
import { PkdQueryController } from './pkd-query.controller';

describe('PkdQueryController', () => {
  let controller: PkdQueryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PkdQueryController],
    }).compile();

    controller = module.get<PkdQueryController>(PkdQueryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
