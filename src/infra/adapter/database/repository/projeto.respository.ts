import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import CreateProjeto from 'src/api/v1/projeto/infrastructure/request/createProjeto';
import UpdateProjeto from 'src/api/v1/projeto/infrastructure/request/updateProjeto';
import { EntityRepository, Repository } from 'typeorm';
import ProjetoEntity from '../entity/projeto.entity';

@EntityRepository(ProjetoEntity)
export class ProjetoRespository extends Repository<ProjetoEntity> {
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
  async saveEntity(newItem: CreateProjeto): Promise<ProjetoEntity> {
    const newEntity = new ProjetoEntity(newItem.nome);

    try {
      return await this.save(newEntity);
    } catch (err) {
      console.log(err);
    }
  }

  async getAllEntities(): Promise<ProjetoEntity[]> {
    try {
      const entity = await this.find();
      if (!entity) throw new NotFoundException();

      return entity;
    } catch (err) {
      throw err;
    }
  }

  async updateEntity(updateEntity: UpdateProjeto) {
    const entity = await this.findOne(updateEntity.nome);
    if (!entity) throw new NotFoundException();
    entity.nome = updateEntity.nome;

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
