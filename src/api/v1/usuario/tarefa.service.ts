import { Injectable } from '@nestjs/common';
import { QuadroRespository } from 'src/infra/adapter/database/repository/quadro.respository';
import { TarefaRespository } from 'src/infra/adapter/database/repository/tarefa.respository';
import { UsuarioRespository } from 'src/infra/adapter/database/repository/usuario.respository';
import CreateUsuario from './infrastructure/request/createUsuario';
import UpdateUsuario from './infrastructure/request/updateUsuario';

@Injectable()
export class UsuarioService {
  constructor(
    private repo: UsuarioRespository,
    private tarefaRepository: TarefaRespository,
    private quadroRepository: QuadroRespository,
  ) {}

  async getAllUsuarios() {
    return this.repo.getAllEntities();
  }

  async updateusuario(newItem: UpdateUsuario) {
    const tarefas = await this.tarefaRepository.findByIds(newItem.tarefasId);
    const quadros = await this.quadroRepository.findByIds(newItem.quadrosId);

    return await this.repo.updateEntity(newItem, tarefas, quadros);
  }

  async removeUsuario(tarefaId: string) {
    return await this.repo.deleteEntityById(tarefaId);
  }

  async createUsuario(body: CreateUsuario) {
    const tarefas = await this.tarefaRepository.findByIds(body.tarefasId);
    const quadros = await this.quadroRepository.findByIds(body.quadrosId);
    return await this.repo.saveEntity(body, tarefas, quadros);
  }
}
