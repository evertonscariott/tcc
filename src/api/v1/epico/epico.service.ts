import { Injectable } from '@nestjs/common';
import { EpicoRespository } from 'src/infra/adapter/database/repository/epico.respository';
import { ProjetoRespository } from 'src/infra/adapter/database/repository/projeto.respository';

import CreateEpico from './infrastructure/request/createEpico';
import UpdateEpico from './infrastructure/request/updateEpico';

@Injectable()
export class EpicoService {
  constructor(
    private repo: EpicoRespository,
    private projetoRepository: ProjetoRespository,
  ) {}

  async getAll() {
    return this.repo.getAllEntities();
  }

  async update(etiquetaUpdate: UpdateEpico) {
    const projeto = await this.projetoRepository.findById(
      etiquetaUpdate.id_projeto,
    );
    return await this.repo.updateEntity(etiquetaUpdate, projeto);
  }

  async remove(etiquetaId: string) {
    return await this.repo.deleteEntityById(etiquetaId);
  }

  async create(body: CreateEpico) {
    const projeto = await this.projetoRepository.findById(body.id_projeto);

    return await this.repo.saveEntity(body, projeto);
  }
}
