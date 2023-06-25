import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PkdQueryModule } from './pkd-query/pkd-query.module';
import { FilterSearch } from './filter-search/filter-search';

@Module({
  imports: [PkdQueryModule],
  controllers: [AppController],
  providers: [AppService, FilterSearch],
})
export class AppModule {}
