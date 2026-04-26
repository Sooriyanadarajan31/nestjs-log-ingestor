import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LogSchema } from '../logs/logs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Log', schema: LogSchema }]),
  ],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule { }