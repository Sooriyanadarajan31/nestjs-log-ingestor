import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LogService {
    constructor(@InjectModel('Log') private logModel: Model<any>) { }

    async create(log: any) {
        return this.logModel.create(log);
    }

    // 🔥 Seed data
    async seed() {
        const count = await this.logModel.countDocuments();

        if (count > 0) return;

        await this.logModel.insertMany([
            {
                level: 'error',
                message: 'Failed to connect to DB',
                resourceId: 'server-1234',
                timestamp: new Date(),
                traceId: 'trace-1',
                spanId: 'span-1',
                commit: 'commit-1',
                metadata: { parentResourceId: 'server-1' },
            },
            {
                level: 'info',
                message: 'User logged in',
                resourceId: 'server-5678',
                timestamp: new Date(),
                traceId: 'trace-2',
                spanId: 'span-2',
                commit: 'commit-2',
                metadata: { parentResourceId: 'server-2' },
            },
        ]);

        console.log('✅ Seed data inserted');
    }
}