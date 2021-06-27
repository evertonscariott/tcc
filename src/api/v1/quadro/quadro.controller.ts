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
import CreateQuadro from './infrastructure/request/createQuadro';
import UpdateQuadro from './infrastructure/request/updateQuadro';
import { QuadroService } from './quadro.service';

@Controller()
@ApiTags('Quadro')
@UseFilters(new HttpExceptionFilter())
export class QuadroController {
  constructor(private readonly serivce: QuadroService) {}

  @Get()
  async get() {
    return this.serivce.getAll();
  }

  @Post()
  async create(@Body() body: CreateQuadro) {
    return this.serivce.create(body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.serivce.remove(id);
  }

  @Put()
  async update(@Body() newItem: UpdateQuadro) {
    return this.serivce.update(newItem);
  }
}
