import { Controller, Delete, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EtiquetaService } from './etiqueta.service';

@Controller()
@ApiTags('Etiqueta')
export class EtiquetaController {
  constructor(private readonly serivce: EtiquetaService) {}

  @Post()
  async addItemToOrder() {
    return await this.serivce.removeItemFromOrder();
  }

  @Delete()
  async removeItemFromOrder() {
    return await this.serivce.removeItemFromOrder();
  }

  @Put()
  async updateItem() {
    return await this.serivce.removeItemFromOrder();
  }
}
