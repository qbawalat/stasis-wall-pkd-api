import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PkdQueryModule } from './pkd-query/pkd-query.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PkdQueryModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
