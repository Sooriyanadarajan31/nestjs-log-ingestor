import { Schema } from 'mongoose';

export const LogSchema = new Schema({
    level: { type: String, index: true },
    message: { type: String, index: true },
    resourceId: { type: String, index: true },
    timestamp: { type: Date, index: true },
    traceId: String,
    spanId: String,
    commit: String,
    metadata: {
        parentResourceId: String,
    },
});

LogSchema.index({ message: 'text' });