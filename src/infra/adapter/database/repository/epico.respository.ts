import { NotFoundException } from '@nestjs/common';
import CreateEpico from 'src/api/v1/epico/infrastructure/request/createEpico';
import UpdateEpico from 'src/api/v1/epico/infrastructure/request/updateEpico';

import { EntityRepository, Repository } from 'typeorm';
import EpicoEntity from '../entity/epico.entity';
import ProjetoEntity from '../entity/projeto.entity';

@EntityRepository(EpicoEntity)
export class EpicoRespository extends Repository<EpicoEntity> {
  async saveEntity(
    newItem: CreateEpico,
    projeto: ProjetoEntity,
  ): Promise<EpicoEntity> {
    const newEntity = new EpicoEntity(
      newItem.nome,
      newItem.descricao,
      newItem.data_inicio,
      newItem.data_fim,
      projeto,
    );

    try {
      return await this.save(newEntity);
    } catch (err) {
      console.log(err);
    }
  }

  async getAllEntities(): Promise<EpicoEntity[]> {
    try {
      const entity = await this.find({
        relations: ['projeto'],
      });
      if (!entity) throw new NotFoundException();

      return entity;
    } catch (err) {
      throw err;
    }
  }

  async updateEntity(updateEntity: UpdateEpico, projeto: ProjetoEntity) {
    const entity = await this.findOne(updateEntity.id);
    if (!entity) throw new NotFoundException();

    entity.nome = updateEntity.nome;
    entity.descricao = updateEntity.descricao;
    entity.dataInicio = updateEntity.data_inicio;
    entity.dataFim = updateEntity.data_fim;
    entity.projeto = projeto;
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
