import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SearchQueryDto } from './dto/search-dto';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class SearchService {
    constructor(@InjectModel('Log') private logModel: Model<any>) { }

    async search(query: SearchQueryDto) {
        const filter: any = {};

        if (query.level) filter.level = query.level;
        if (query.resourceId) filter.resourceId = query.resourceId;
        if (query.traceId) filter.traceId = query.traceId;
        if (query.spanId) filter.spanId = query.spanId;
        if (query.commit) filter.commit = query.commit;

        if (query.parentResourceId) {
            filter['metadata.parentResourceId'] = query.parentResourceId;
        }

        if (query.message) {
            if (query.regex === 'true') {
                try {
                    filter.message = { $regex: new RegExp(query.message, 'i') };
                } catch {
                    throw new BadRequestException('Invalid regex pattern');
                }
            } else {
                filter.message = { $regex: query.message, $options: 'i' };
            }
        }

        // date range
        if (query.start && query.end) {
            filter.timestamp = {
                $gte: new Date(query.start),
                $lte: new Date(query.end),
            };
        }

        const page = Number(query.page) || 1;
        const limit = Number(query.limit) || 10;

        return this.logModel
            .find(filter)
            .sort({ timestamp: -1 }) // ✅ latest first
            .skip((page - 1) * limit)
            .limit(limit);
    }
}