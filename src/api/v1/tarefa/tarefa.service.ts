import { Injectable } from '@nestjs/common';
import { EtiquetaRespository } from 'src/infra/adapter/database/repository/etiqueta.respository';
import { HistoriaRespository } from 'src/infra/adapter/database/repository/historia.respository';
import { ListaRespository } from 'src/infra/adapter/database/repository/lista.respository';
import { TarefaRespository } from 'src/infra/adapter/database/repository/tarefa.respository';
import { TipoTarefaRespository } from 'src/infra/adapter/database/repository/tipoTarefa.respository';
import CreateTarefa from './infrastructure/request/createTarefa';

import UpdateTarefa from './infrastructure/request/updateTarefa';

@Injectable()
export class TarefaService {
  constructor(
    private repo: TarefaRespository,
    private tipoTarefaRepositoy: TipoTarefaRespository,
    private listaRepository: ListaRespository,
    private historiaRepository: HistoriaRespository,
    private etiquetasRepository: EtiquetaRespository,
  ) {}

  async getAllTarefas() {
    return this.repo.getAllEntities();
  }

  async updateTarefa(newItem: UpdateTarefa) {
    const tipoTarefa = await this.tipoTarefaRepositoy.findById(
      newItem.tipoTarefaId,
    );
    const lista = await this.listaRepository.findById(newItem.listaId);
    const historia = await this.historiaRepository.findById(newItem.historiaId);
    const etiquetas = await this.etiquetasRepository.findByIds(
      newItem.etiquetaIds,
    );
    return await this.repo.updateEntity(
      newItem,
      tipoTarefa,
      lista,
      historia,
      etiquetas,
    );
  }

  async removeTarefa(tarefaId: string) {
    return await this.repo.deleteEntityById(tarefaId);
  }

  async createEtiquea(body: CreateTarefa) {
    const tipoTarefa = await this.tipoTarefaRepositoy.findById(
      body.tipoTarefaId,
    );
    const lista = await this.listaRepository.findById(body.listaId);
    const historia = await this.historiaRepository.findById(body.historiaId);
    const etiquetas = await this.etiquetasRepository.findByIds(
      body.etiquetaIds,
    );
    return await this.repo.saveEntity(
      body,
      tipoTarefa,
      lista,
      historia,
      etiquetas,
    );
  }
}
