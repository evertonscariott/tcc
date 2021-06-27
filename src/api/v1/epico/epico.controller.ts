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
import CreateEpico from './infrastructure/request/createEpico';
import UpdateEpico from './infrastructure/request/updateEpico';
import { EpicoService } from './epico.service';

@Controller()
@ApiTags('Epico')
@UseFilters(new HttpExceptionFilter())
export class EpicoController {
  constructor(private readonly serivce: EpicoService) {}

  @Get()
  async get() {
    return this.serivce.getAll();
  }

  @Post()
  async create(@Body() body: CreateEpico) {
    return this.serivce.create(body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.serivce.remove(id);
  }

  @Put()
  async update(@Body() newItem: UpdateEpico) {
    return this.serivce.update(newItem);
  }
}
