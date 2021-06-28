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
import CreateLista from './infrastructure/request/createLista';
import UpdateLista from './infrastructure/request/updateLista';

import { ListaService } from './lista.service';

@Controller()
@ApiTags('Lista')
@UseFilters(new HttpExceptionFilter())
export class ListaController {
  constructor(private readonly serivce: ListaService) {}

  @Get()
  async get() {
    return this.serivce.getAll();
  }

  @Post()
  async create(@Body() body: CreateLista) {
    return this.serivce.create(body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.serivce.remove(id);
  }

  @Put()
  async update(@Body() newItem: UpdateLista) {
    return this.serivce.update(newItem);
  }
}
