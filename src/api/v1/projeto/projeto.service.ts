import { Injectable } from '@nestjs/common';
import { ProjetoRespository } from 'src/infra/adapter/database/repository/projeto.respository';
import CreateProjeto from './infrastructure/request/createProjeto';
import UpdateProjeto from './infrastructure/request/updateProjeto';

@Injectable()
export class ProjetoService {
  constructor(private repo: ProjetoRespository) {}

  async getAll() {
    return this.repo.getAllEntities();
  }

  async update(etiquetaUpdate: UpdateProjeto) {
    return await this.repo.updateEntity(etiquetaUpdate);
  }

  async remove(etiquetaId: string) {
    return await this.repo.deleteEntityById(etiquetaId);
  }

  async create(body: CreateProjeto) {
    return await this.repo.saveEntity(body);
  }
}
