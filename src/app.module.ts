import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchModule } from './search/search.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/logs'),
    LogModule,
    SearchModule,
  ],
})
export class AppModule { }