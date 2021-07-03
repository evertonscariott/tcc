import { NotFoundException } from '@nestjs/common';
import CreateUsuario from 'src/api/v1/usuario/infrastructure/request/createUsuario';
import UpdateUsuario from 'src/api/v1/usuario/infrastructure/request/updateUsuario';
import { EntityRepository, Repository } from 'typeorm';
import QuadroEntity from '../entity/quadro.entity';
import TarefaEntity from '../entity/tarefa.entity';
import UsuarioEntity from '../entity/usuario.entity';

@EntityRepository(UsuarioEntity)
export class UsuarioRespository extends Repository<UsuarioEntity> {
  async saveEntity(
    newItem: CreateUsuario,
    tarefas: TarefaEntity[],
    quadros: QuadroEntity[],
  ): Promise<UsuarioEntity> {
    const newEntity = new UsuarioEntity(
      newItem.nome,
      newItem.email,
      newItem.usuario,
      newItem.capacidadeDia,
      tarefas,
      quadros,
    );

    try {
      return await this.save(newEntity);
    } catch (err) {
      console.log(err);
    }
  }

  async getAllEntities(): Promise<UsuarioEntity[]> {
    try {
      const entity = await this.find({
        relations: ['quadros', 'tarefas'],
      });
      if (!entity) throw new NotFoundException();

      return entity;
    } catch (err) {
      throw err;
    }
  }

  async updateEntity(
    updateEntity: UpdateUsuario,
    tarefas: TarefaEntity[],
    quadros: QuadroEntity[],
  ) {
    const entity = await this.findOne(updateEntity.id);
    if (!entity) throw new NotFoundException();
    entity.nome = updateEntity.nome;
    entity.email = updateEntity.email;
    entity.usuario = updateEntity.usuario;
    entity.capacidadeDia = updateEntity.capacidadeDia;
    entity.tarefas = tarefas;
    entity.quadros = quadros;

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
