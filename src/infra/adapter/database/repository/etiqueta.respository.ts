import { NotFoundException } from '@nestjs/common';
import CreateEtiqueta from 'src/api/v1/etiqueta/infrastructure/request/createEtiqueta';
import UpdateEtiqueta from 'src/api/v1/etiqueta/infrastructure/request/updateEtiqueta';
import { EntityRepository, Repository } from 'typeorm';
import EtiquetaEntity from '../entity/etiqueta.entity';

@EntityRepository(EtiquetaEntity)
export class EtiquetaRespository extends Repository<EtiquetaEntity> {
  async saveEtiqueta(etiqueta: CreateEtiqueta): Promise<EtiquetaEntity> {
    const newEtiquetaToBeSaved = new EtiquetaEntity(
      etiqueta.descricao,
      etiqueta.cor,
    );

    try {
      return await this.save(newEtiquetaToBeSaved);
    } catch (err) {
      console.log(err);
    }
  }

  async getAllEtiquetas(): Promise<EtiquetaEntity[]> {
    try {
      const entity = await this.find();
      if (!entity) throw new NotFoundException();

      return entity;
    } catch (err) {
      throw err;
    }
  }

  async updateEtiqueta(etiqueta: UpdateEtiqueta) {
    const entity = await this.findOne(etiqueta.idEtiqueta);

    entity.cor = etiqueta.cor;
    entity.descricao = etiqueta.descricao;

    try {
      return await entity.save();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteByIdEtiqueta(idEtiqueta: string) {
    const entity = await this.findOne(idEtiqueta);

    try {
      await entity.remove();
    } catch (error) {
      console.log(error);
    }
  }
}
