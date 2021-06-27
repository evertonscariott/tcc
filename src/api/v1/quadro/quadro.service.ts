import { Injectable } from '@nestjs/common';

import { ProjetoRespository } from 'src/infra/adapter/database/repository/projeto.respository';
import { QuadroRespository } from 'src/infra/adapter/database/repository/quadro.respository';

import CreateQuadro from './infrastructure/request/createQuadro';
import UpdateQuadro from './infrastructure/request/updateQuadro';

@Injectable()
export class QuadroService {
  constructor(
    private repo: QuadroRespository,
    private projetoRepository: ProjetoRespository,
  ) {}

  async getAll() {
    return this.repo.getAllEntities();
  }

  async update(updatedItem: UpdateQuadro) {
    const projeto = await this.projetoRepository.findById(
      updatedItem.id_projeto,
    );
    return await this.repo.updateEntity(updatedItem, projeto);
  }

  async remove(etiquetaId: string) {
    return await this.repo.deleteEntityById(etiquetaId);
  }

  async create(body: CreateQuadro) {
    const projeto = await this.projetoRepository.findById(body.id_projeto);

    return await this.repo.saveEntity(body, projeto);
  }
}
