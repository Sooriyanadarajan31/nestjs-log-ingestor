import { Controller, Post, Body } from '@nestjs/common';
import { LogService } from './log.service';
import { CreateLogDto } from './dto/create-log.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Logs')
@Controller('logs')
export class LogController {
    constructor(private readonly logService: LogService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new log' })
    async create(@Body() body: CreateLogDto) {
        return this.logService.create(body);
    }
}