import { NotFoundException } from '@nestjs/common';
import CreateQuadro from 'src/api/v1/quadro/infrastructure/request/createQuadro';
import UpdateQuadro from 'src/api/v1/quadro/infrastructure/request/updateQuadro';
import { EntityRepository, Repository } from 'typeorm';
import ProjetoEntity from '../entity/projeto.entity';
import QuadroEntity from '../entity/quadro.entity';

@EntityRepository(QuadroEntity)
export class QuadroRespository extends Repository<QuadroEntity> {
  async saveEntity(
    newItem: CreateQuadro,
    projeto: ProjetoEntity,
  ): Promise<QuadroEntity> {
    const newEntity = new QuadroEntity(newItem.nome, newItem.situacao, projeto);

    try {
      return await this.save(newEntity);
    } catch (err) {
      console.log(err);
    }
  }

  async getAllEntities(): Promise<QuadroEntity[]> {
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

  async updateEntity(updateEntity: UpdateQuadro, projeto: ProjetoEntity) {
    const entity = await this.findOne(updateEntity.id);
    if (!entity) throw new NotFoundException();

    entity.nome = updateEntity.nome;
    entity.situacao = updateEntity.situacao;
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
