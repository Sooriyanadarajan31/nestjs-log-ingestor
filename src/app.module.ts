import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchModule } from './search/search.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL!),
    LogModule,
    SearchModule,
  ],
})
export class AppModule { }