import { Test, TestingModule } from '@nestjs/testing';
import { PkdQueryService } from './pkd-query.service';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { PkdNumber, PkdNumberSchema } from './schemas/pkd-number.schema';
import { Profession, ProfessionSchema } from './schemas/profession.schema';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection, Model, connect } from 'mongoose';
import { PkdQueryController } from './pkd-query.controller';

const ProfessionAliasDtoStub = (professionAlias: string) => professionAlias;
describe('PkdQueryService', () => {
  let service: PkdQueryService;
  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  let professionModel: Model<Profession>;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    professionModel = mongoConnection.model(Profession.name, ProfessionSchema);
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PkdQueryController],
      providers: [
        PkdQueryService,
        { provide: getModelToken(Profession.name), useValue: professionModel },
      ],
    }).compile();
    service = app.get<PkdQueryService>(PkdQueryService);
  });

  afterAll(async () => {
    await mongoConnection.dropDatabase();
    await mongoConnection.close();
    await mongod.stop();
  });

  afterEach(async () => {
    const collections = mongoConnection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return pkd', async () => {
    const newLocal = await service.find('engineer');
    console.log(newLocal);
    expect(newLocal).toBeTruthy();
  });
});
