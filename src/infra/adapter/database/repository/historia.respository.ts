import { NotFoundException } from '@nestjs/common';
import CreateHistoria from 'src/api/v1/historia/infrastructure/request/createHistoria';
import UpdateHistoria from 'src/api/v1/historia/infrastructure/request/updateHistoria';

import { EntityRepository, Repository } from 'typeorm';
import HistoriaEntity from '../entity/historia.entity';
import QuadroEntity from '../entity/quadro.entity';

@EntityRepository(HistoriaEntity)
export class HistoriaRespository extends Repository<HistoriaEntity> {
  async saveEntity(
    newItem: CreateHistoria,
    quadro: QuadroEntity,
  ): Promise<HistoriaEntity> {
    const newEntity = new HistoriaEntity(
      newItem.nome,
      newItem.descricao,
      newItem.data_inicio,
      newItem.data_fim,
      quadro,
    );

    try {
      return await this.save(newEntity);
    } catch (err) {
      console.log(err);
    }
  }

  async getAllEntities(): Promise<HistoriaEntity[]> {
    try {
      const entity = await this.find({
        relations: ['quadro'],
      });
      if (!entity) throw new NotFoundException();

      return entity;
    } catch (err) {
      throw err;
    }
  }

  async updateEntity(updateEntity: UpdateHistoria, quadro: QuadroEntity) {
    const entity = await this.findOne(updateEntity.id);
    if (!entity) throw new NotFoundException();

    entity.nome = updateEntity.nome;
    entity.descricao = updateEntity.descricao;
    entity.dataInicio = updateEntity.data_inicio;
    entity.dataFim = updateEntity.data_fim;
    entity.quadro = quadro;
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
}
