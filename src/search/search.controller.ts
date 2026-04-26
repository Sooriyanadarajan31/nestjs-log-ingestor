import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchQueryDto } from './dto/search-dto';
import { RoleGuard } from 'src/common/guards/role.guard';
import { ApiHeader } from '@nestjs/swagger';

@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SearchService) { }

    @ApiHeader({
        name: 'role',
        description: 'User role (admin required)',
        required: true,
        example: 'admin',
    })

    @UseGuards(RoleGuard)
    @Get()
    async search(@Query() query: SearchQueryDto) {
        return this.searchService.search(query);
    }
}