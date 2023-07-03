import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PkdQueryModule } from './pkd-query/pkd-query.module';

@Module({
  imports: [PkdQueryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
