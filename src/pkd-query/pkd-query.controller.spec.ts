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
    service = module.get<PkdQueryService>(PkdQueryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should inject pkd-query service', () => {
    expect(service).toBeDefined();
  });

  it('should call pkd-query service get method', async () => {
    const SERVICE_MOCK_RESPONSE = 'Pkd call mock';
    jest
      .spyOn(service, 'findPkd')
      .mockImplementation((profession: string) => SERVICE_MOCK_RESPONSE);
    const pkd = await controller.getPkd('frontend developer');
    expect(service.findPkd).toBeCalledTimes(1);
    expect(service.findPkd).toBeCalledWith('frontend developer');
    expect(pkd).toEqual(SERVICE_MOCK_RESPONSE);
  });
});
