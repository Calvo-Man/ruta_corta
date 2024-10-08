import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiRestService } from './api-rest.service';
import { CreateApiRestDto } from './dto/create-api-rest.dto';
import { UpdateApiRestDto } from './dto/update-api-rest.dto';

@Controller('api-rest')
export class ApiRestController {
  constructor(private readonly apiRestService: ApiRestService) {}

  @Post()
  create(@Body() createApiRestDto: CreateApiRestDto) {
    return this.apiRestService.create(createApiRestDto);
  }

  @Get()
  findAll() {
    return this.apiRestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apiRestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApiRestDto: UpdateApiRestDto) {
    return this.apiRestService.update(+id, updateApiRestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiRestService.remove(+id);
  }
}
