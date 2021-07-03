import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import CreateTipoTarefa from 'src/api/v1/tipoTarefa/infrastructure/request/createTipoTarefa';
import UpdateTipoTarefa from 'src/api/v1/tipoTarefa/infrastructure/request/updateTipoTarefa';
import { EntityRepository, Repository } from 'typeorm';
import TipoTarefaEntity from '../entity/tipoTarefa.entity';

@EntityRepository(TipoTarefaEntity)
export class TipoTarefaRespository extends Repository<TipoTarefaEntity> {
  async findById(id: number) {
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
  async saveEntity(newItem: CreateTipoTarefa): Promise<TipoTarefaEntity> {
    const newEntity = new TipoTarefaEntity(newItem.nome);

    try {
      return await this.save(newEntity);
    } catch (err) {
      console.log(err);
    }
  }

  async getAllEntities(): Promise<TipoTarefaEntity[]> {
    try {
      const entity = await this.find();
      if (!entity) throw new NotFoundException();

      return entity;
    } catch (err) {
      throw err;
    }
  }

  async updateEntity(updateEntity: UpdateTipoTarefa) {
    const entity = await this.findOne(updateEntity.idTipoTarefa);
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
