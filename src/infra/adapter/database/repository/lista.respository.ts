import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import CreateLista from 'src/api/v1/lista/infrastructure/request/createLista';
import UpdateLista from 'src/api/v1/lista/infrastructure/request/updateLista';

import { EntityRepository, Repository } from 'typeorm';
import ListaEntity from '../entity/lista.entity';

import QuadroEntity from '../entity/quadro.entity';

@EntityRepository(ListaEntity)
export class ListaRespository extends Repository<ListaEntity> {
  async saveEntity(
    newItem: CreateLista,
    quadro: QuadroEntity,
  ): Promise<ListaEntity> {
    const newEntity = new ListaEntity(newItem.nome, quadro);

    try {
      return await this.save(newEntity);
    } catch (err) {
      console.log(err);
    }
  }

  async getAllEntities(): Promise<ListaEntity[]> {
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

  async updateEntity(updateEntity: UpdateLista, quadro: QuadroEntity) {
    const entity = await this.findOne(updateEntity.id);
    if (!entity) throw new NotFoundException();

    entity.nome = updateEntity.nome;
    entity.quadro = quadro;
    try {
      return await entity.save();
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
  async deleteEntityById(id: string) {
    const entity = await this.findOne(id);

    try {
      await entity.remove();
    } catch (error) {
      console.log(error);
    }
  }
}
