import { Injectable } from '@nestjs/common';
import { ListaRespository } from 'src/infra/adapter/database/repository/lista.respository';

import { QuadroRespository } from 'src/infra/adapter/database/repository/quadro.respository';
import CreateLista from './infrastructure/request/createLista';

import UpdateLista from './infrastructure/request/updateLista';

@Injectable()
export class ListaService {
  constructor(
    private repo: ListaRespository,
    private quadroRepository: QuadroRespository,
  ) {}

  async getAll() {
    return this.repo.getAllEntities();
  }

  async update(updatedItem: UpdateLista) {
    const projeto = await this.quadroRepository.findById(updatedItem.id_quadro);
    return await this.repo.updateEntity(updatedItem, projeto);
  }

  async remove(etiquetaId: string) {
    return await this.repo.deleteEntityById(etiquetaId);
  }

  async create(body: CreateLista) {
    const projeto = await this.quadroRepository.findById(body.id_quadro);

    return await this.repo.saveEntity(body, projeto);
  }
}
