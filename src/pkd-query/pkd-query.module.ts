import { Module } from '@nestjs/common';
import { PkdQueryService } from './pkd-query.service';
import { PkdQueryController } from './pkd-query.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PkdNumber, PkdNumberSchema } from './schemas/pkd-number.schema';
import { Profession, ProfessionSchema } from './schemas/profession.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PkdNumber.name, schema: PkdNumberSchema },
    ]),
    MongooseModule.forFeature([
      { name: Profession.name, schema: ProfessionSchema },
    ]),
  ],
  providers: [PkdQueryService],
  controllers: [PkdQueryController],
})
export class PkdQueryModule {}
