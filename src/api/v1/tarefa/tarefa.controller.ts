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
import CreateTarefa from './infrastructure/request/createTarefa';
import UpdateTarefa from './infrastructure/request/updateTarefa';
import { TarefaService } from './tarefa.service';

@Controller()
@ApiTags('Tarefa')
@UseFilters(new HttpExceptionFilter())
export class TarefaController {
  constructor(private readonly serivce: TarefaService) {}

  @Get()
  async get() {
    return this.serivce.getAllTarefas();
  }

  @Post()
  async create(@Body() body: CreateTarefa) {
    return this.serivce.createEtiquea(body);
  }

  @Delete('/:id')
  async delete(@Param('id') tarefaId: string) {
    return this.serivce.removeTarefa(tarefaId);
  }

  @Put()
  async update(@Body() tarefaUpdate: UpdateTarefa) {
    return this.serivce.updateTarefa(tarefaUpdate);
  }
}
