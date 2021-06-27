import { Injectable } from '@nestjs/common';
import { EtiquetaRespository } from 'src/infra/adapter/database/repository/etiqueta.respository';
import CreateEtiqueta from './infrastructure/request/createEtiqueta';

import UpdateEtiqueta from './infrastructure/request/updateEtiqueta';

@Injectable()
export class EtiquetaService {
  constructor(private repo: EtiquetaRespository) {}

  async getAllEtiquetas() {
    return this.repo.getAllEtiquetas();
  }

  async updateEtiqueta(etiquetaUpdate: UpdateEtiqueta) {
    return await this.repo.updateEtiqueta(etiquetaUpdate);
  }

  async removeEtiqueta(etiquetaId: string) {
    return await this.repo.deleteByIdEtiqueta(etiquetaId);
  }

  async createEtiquea(body: CreateEtiqueta) {
    return await this.repo.saveEtiqueta(body);
  }
}
