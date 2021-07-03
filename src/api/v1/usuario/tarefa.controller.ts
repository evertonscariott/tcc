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
import CreateUsuario from './infrastructure/request/createUsuario';
import UpdateUsuario from './infrastructure/request/updateUsuario';
import { UsuarioService } from './tarefa.service';

@Controller()
@ApiTags('Usuario')
@UseFilters(new HttpExceptionFilter())
export class UsuarioController {
  constructor(private readonly serivce: UsuarioService) {}

  @Get()
  async get() {
    return this.serivce.getAllUsuarios();
  }

  @Post()
  async create(@Body() body: CreateUsuario) {
    return this.serivce.createUsuario(body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.serivce.removeUsuario(id);
  }

  @Put()
  async update(@Body() usuarioUpdate: UpdateUsuario) {
    return this.serivce.updateusuario(usuarioUpdate);
  }
}
