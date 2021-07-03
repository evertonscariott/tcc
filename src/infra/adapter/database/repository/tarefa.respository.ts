import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
import CreateTarefa from 'src/api/v1/tarefa/infrastructure/request/createTarefa';
import UpdateTarefa from 'src/api/v1/tarefa/infrastructure/request/updateTarefa';

import { EntityRepository, Repository } from 'typeorm';
import EtiquetaEntity from '../entity/etiqueta.entity';
import HistoriaEntity from '../entity/historia.entity';
import ListaEntity from '../entity/lista.entity';
import TarefaEntity from '../entity/tarefa.entity';
import TipoTarefaEntity from '../entity/tipoTarefa.entity';

@EntityRepository(TarefaEntity)
export class TarefaRespository extends Repository<TarefaEntity> {
  async saveEntity(
    newItem: CreateTarefa,
    tipoTarefa: TipoTarefaEntity,
    lista: ListaEntity,
    historia: HistoriaEntity,
    etiquetas: EtiquetaEntity[],
  ): Promise<TarefaEntity> {
    const newEntity = new TarefaEntity(
      newItem.nome,
      newItem.descricao,
      newItem.tempoEstimado,
      newItem.tempoRealizado,
      tipoTarefa,
      lista,
      historia,
      etiquetas,
    );

    try {
      return await this.save(newEntity);
    } catch (err) {
      console.log(err);
    }
  }

  async getAllEntities(): Promise<TarefaEntity[]> {
    try {
      const entity = await this.find({
        relations: ['tipoTarefa', 'lista', 'historia', 'etiquetas'],
      });
      if (!entity) throw new NotFoundException();

      return entity;
    } catch (err) {
      throw err;
    }
  }

  async updateEntity(
    updateEntity: UpdateTarefa,
    tipoTarefa: TipoTarefaEntity,
    lista: ListaEntity,
    historia: HistoriaEntity,
    etiquetas: EtiquetaEntity[],
  ) {
    const entity = await this.findOne(updateEntity.id);
    if (!entity) throw new NotFoundException();
    entity.nome = updateEntity.nome;
    entity.descricao = updateEntity.descricao;
    entity.tempoEstimado = updateEntity.tempoEstimado;
    entity.tempoRealizado = updateEntity.tempoRealizado;
    entity.tipoTarefa = tipoTarefa;
    entity.lista = lista;
    entity.historia = historia;
    entity.etiquetas = etiquetas;

    try {
      return await entity.save();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteEntityById(id: string) {
    const entity = await this.findOne(id);

    try {
      await entity.remove();
    } catch (error) {
      console.log(error);
    }
  }

  findById(id: number) {
    try {
      const entity = this.findOne({
        where: { id: id },
      });
      if (!entity) throw new NotFoundException();

      return entity;
    } catch (err) {
      if (err.message === 'Not Found') throw new NotFoundException();

      throw new InternalServerErrorException();
    }
  }
}
