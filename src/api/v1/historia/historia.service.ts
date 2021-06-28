import { Injectable } from '@nestjs/common';
import { HistoriaRespository } from 'src/infra/adapter/database/repository/historia.respository';
import { QuadroRespository } from 'src/infra/adapter/database/repository/quadro.respository';
import CreateHistoria from './infrastructure/request/createHistoria';
import UpdateHistoria from './infrastructure/request/updateHistoria';

@Injectable()
export class HistoriaService {
  constructor(
    private repo: HistoriaRespository,
    private quadroRepository: QuadroRespository,
  ) {}

  async getAll() {
    return this.repo.getAllEntities();
  }

  async update(updatedEntity: UpdateHistoria) {
    const quadro = await this.quadroRepository.findById(
      updatedEntity.id_quadro,
    );
    return await this.repo.updateEntity(updatedEntity, quadro);
  }

  async remove(etiquetaId: string) {
    return await this.repo.deleteEntityById(etiquetaId);
  }

  async create(body: CreateHistoria) {
    const quadro = await this.quadroRepository.findById(body.id_quadro);

    return await this.repo.saveEntity(body, quadro);
  }
}
