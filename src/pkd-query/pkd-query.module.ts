import { Module } from '@nestjs/common';
import { PkdQueryService } from './pkd-query.service';
import { PkdQueryController } from './pkd-query.controller';

@Module({
  providers: [PkdQueryService],
  controllers: [PkdQueryController]
})
export class PkdQueryModule {}
