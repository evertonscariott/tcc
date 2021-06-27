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
import CreateTipoTarefa from './infrastructure/request/createTipoTarefa';

import UpdateTipoTarefa from './infrastructure/request/updateTipoTarefa';
import { TipoTarefaService } from './tipoTarefa.service';

@Controller()
@ApiTags('TipoTarefa')
@UseFilters(new HttpExceptionFilter())
export class TipoTarefaController {
  constructor(private readonly serivce: TipoTarefaService) {}

  @Get()
  async get() {
    return this.serivce.getAllTiposTarefas();
  }

  @Post()
  async create(@Body() body: CreateTipoTarefa) {
    return this.serivce.createEtiquea(body);
  }

  @Delete('/:id')
  async delete(@Param('id') etiquetaId: string) {
    return this.serivce.removeEtiqueta(etiquetaId);
  }

  @Put()
  async update(@Body() etiquetaUpdate: UpdateTipoTarefa) {
    return this.serivce.updateEtiqueta(etiquetaUpdate);
  }
}
