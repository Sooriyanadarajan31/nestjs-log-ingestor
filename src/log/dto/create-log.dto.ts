import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsString,
    IsOptional,
    IsISO8601,
    ValidateNested,
    IsIn,
} from 'class-validator';
import { Type } from 'class-transformer';

class MetadataDto {
    @ApiPropertyOptional({ example: 'server-0987' })
    @IsOptional()
    @IsString()
    parentResourceId?: string;
}

export class CreateLogDto {
    @ApiProperty({ example: 'error' })
    @IsString()
    @IsIn(['info', 'error', 'warn', 'debug'])
    level!: string;

    @ApiProperty({ example: 'Failed to connect to DB' })
    @IsString()
    message!: string;

    @ApiProperty({ example: 'server-1234' })
    @IsString()
    resourceId!: string;

    @ApiProperty({ example: '2023-09-15T08:00:00Z' })
    @IsISO8601()
    timestamp!: string;

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

    @ApiPropertyOptional({ type: MetadataDto })
    @IsOptional()
    @ValidateNested()
    @Type(() => MetadataDto)
    metadata?: MetadataDto;
}