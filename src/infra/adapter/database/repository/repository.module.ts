import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpicoRespository } from './epico.respository';
import { EtiquetaRespository } from './etiqueta.respository';
import { HistoriaRespository } from './historia.respository';
import { ListaRespository } from './lista.respository';
import { ProjetoRespository } from './projeto.respository';
import { QuadroRespository } from './quadro.respository';
import { TarefaRespository } from './tarefa.respository';
import { TipoTarefaRespository } from './tipoTarefa.respository';
import { UsuarioRespository } from './usuario.respository';

const listOfRepo = [
  TypeOrmModule.forFeature([
    EtiquetaRespository,
    TipoTarefaRespository,
    ProjetoRespository,
    EpicoRespository,
    QuadroRespository,
    ListaRespository,
    HistoriaRespository,
    TarefaRespository,
    UsuarioRespository,
  ]),
];

@Module({
  imports: listOfRepo,
  exports: listOfRepo,
})
export class RepositoryModule {}
