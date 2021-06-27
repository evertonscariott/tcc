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
import CreateProjeto from './infrastructure/request/createProjeto';
import UpdateProjeto from './infrastructure/request/updateProjeto';
import { ProjetoService } from './projeto.service';

@Controller()
@ApiTags('Projeto')
@UseFilters(new HttpExceptionFilter())
export class ProjetoController {
  constructor(private readonly serivce: ProjetoService) {}

  @Get()
  async get() {
    return this.serivce.getAll();
  }

  @Post()
  async create(@Body() body: CreateProjeto) {
    return this.serivce.create(body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.serivce.remove(id);
  }

  @Put()
  async update(@Body() newItem: UpdateProjeto) {
    return this.serivce.update(newItem);
  }
}
