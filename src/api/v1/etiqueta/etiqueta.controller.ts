import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/infra/exceptions/http-exception.filter';
import { EtiquetaService } from './etiqueta.service';
import CreateEtiqueta from './infrastructure/request/createEtiqueta';
import UpdateEtiqueta from './infrastructure/request/updateEtiqueta';

@Controller()
@ApiTags('Etiqueta')
@UseFilters(new HttpExceptionFilter())
export class EtiquetaController {
  constructor(private readonly serivce: EtiquetaService) {}

  @Get()
  async get() {
    return this.serivce.getAllEtiquetas();
  }

  @Post()
  async create(@Body() body: CreateEtiqueta) {
    return this.serivce.createEtiquea(body);
  }

  @Delete('/:id')
  async delete(@Param('id') etiquetaId: string) {
    return this.serivce.removeEtiqueta(etiquetaId);
  }

  @Put()
  async update(@Body() etiquetaUpdate: UpdateEtiqueta) {
    return this.serivce.updateEtiqueta(etiquetaUpdate);
  }
}