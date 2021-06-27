import { Injectable } from '@nestjs/common';
import { TipoTarefaRespository } from 'src/infra/adapter/database/repository/tipoTarefa.respository';

import CreateEtiqueta from './infrastructure/request/createTipoTarefa';
import UpdateTipoTarefa from './infrastructure/request/updateTipoTarefa';

@Injectable()
export class TipoTarefaService {
  constructor(private repo: TipoTarefaRespository) {}

  async getAllTiposTarefas() {
    return this.repo.getAllEntities();
  }

  async updateEtiqueta(newItem: UpdateTipoTarefa) {
    return await this.repo.updateEntity(newItem);
  }

  async removeEtiqueta(etiquetaId: string) {
    return await this.repo.deleteEntityById(etiquetaId);
  }

  async createEtiquea(body: CreateEtiqueta) {
    return await this.repo.saveEntity(body);
  }
}
