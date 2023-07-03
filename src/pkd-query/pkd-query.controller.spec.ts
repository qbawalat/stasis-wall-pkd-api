import { Test, TestingModule } from '@nestjs/testing';
import { PkdQueryController } from './pkd-query.controller';
import { PkdQueryService } from './pkd-query.service';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection, Model, connect } from 'mongoose';
import { Profession, ProfessionSchema } from './schemas/profession.schema';
import { getModelToken } from '@nestjs/mongoose';

const ProfessionDtoStub: (professionName: string) => Profession = (
  professionName: string,
) => ({
  extraPkdNumbers: null,
  majorPkdNumber: null,
  name: professionName,
  aliases: [professionName],
});

describe('AppController', () => {
  let pkdQueryController: PkdQueryController;
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
    pkdQueryController = app.get<PkdQueryController>(PkdQueryController);
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

  describe('postProfession', () => {
    it('should return the saved object', async () => {
      const createdProfession = await pkdQueryController.post({
        name: 'informatyk',
      });
      expect(createdProfession.name).toBe(ProfessionDtoStub('informatyk').name);
    });
  });

  describe('getProfession', () => {
    it('should return the corresponding saved object', async () => {
      await new professionModel(ProfessionDtoStub('informatyk')).save();
      const profession = await pkdQueryController.get(
        ProfessionDtoStub('informatyk').name,
      );
      expect(profession.name).toBe(ProfessionDtoStub('informatyk').name);
    });
    it('should return null', async () => {
      const profession = await pkdQueryController.get(
        ProfessionDtoStub('informatyk').name,
      );
      expect(profession).toBeNull();
    });
  });
});
