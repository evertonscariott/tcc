import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/infra/exceptions/http-exception.filter';
import { HistoriaService } from './historia.service';
import CreateHistoria from './infrastructure/request/createHistoria';
import UpdateHistoria from './infrastructure/request/updateHistoria';

@Controller()
@ApiTags('Historia')
@UseFilters(new HttpExceptionFilter())
export class HistoriaController {
  constructor(private readonly serivce: HistoriaService) {}

  @Get()
  async get() {
    return this.serivce.getAll();
  }

  @Post()
  async create(@Body() body: CreateHistoria) {
    return this.serivce.create(body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.serivce.remove(id);
  }

  @Put()
  async update(@Body() newItem: UpdateHistoria) {
    return this.serivce.update(newItem);
  }
}
