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

  it('should call pkd-query service on get method', async () => {
    const SERVICE_RESPONSE_MOCK = 'Pkd call mock';
    const GET_PARAMETER_MOCK = 'frontend developer';
    jest
      .spyOn(service, 'findPkd')
      .mockImplementation((profession: string) => SERVICE_RESPONSE_MOCK);
    const pkd = await controller.get(GET_PARAMETER_MOCK);
    expect(service.findPkd).toBeCalledWith(GET_PARAMETER_MOCK);
    expect(service.findPkd).toBeCalledTimes(1);
    expect(pkd).toEqual(SERVICE_RESPONSE_MOCK);
  });
});
