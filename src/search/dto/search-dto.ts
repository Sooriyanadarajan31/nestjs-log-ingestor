import { ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsOptional,
    IsString,
    IsISO8601,
} from 'class-validator';

export class SearchQueryDto {
    @ApiPropertyOptional({ example: 'true' })
    @IsOptional()
    regex?: string;

    @ApiPropertyOptional({ example: 1 })
    @IsOptional()
    page?: number;

    @ApiPropertyOptional({ example: 10 })
    @IsOptional()
    limit?: number;

    @ApiPropertyOptional({ example: 'error' })
    @IsOptional()
    @IsString()
    level?: string;

    @ApiPropertyOptional({ example: 'Failed to connect' })
    @IsOptional()
    @IsString()
    message?: string;

    @ApiPropertyOptional({ example: 'server-1234' })
    @IsOptional()
    @IsString()
    resourceId?: string;

    @ApiPropertyOptional({ example: 'abc-xyz-123' })
    @IsOptional()
    @IsString()
    traceId?: string;

    @ApiPropertyOptional({ example: 'span-456' })
    @IsOptional()
    @IsString()
    spanId?: string;

    @ApiPropertyOptional({ example: '5e5342f' })
    @IsOptional()
    @IsString()
    commit?: string;

    @ApiPropertyOptional({ example: 'server-0987' })
    @IsOptional()
    @IsString()
    parentResourceId?: string;

    // Date range filters
    @ApiPropertyOptional({ example: '2023-09-10T00:00:00Z' })
    @IsOptional()
    @IsISO8601()
    start?: string;

    @ApiPropertyOptional({ example: '2023-09-15T23:59:59Z' })
    @IsOptional()
    @IsISO8601()
    end?: string;
}