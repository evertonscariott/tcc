import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpicoRespository } from './epico.respository';
import { EtiquetaRespository } from './etiqueta.respository';
import { HistoriaRespository } from './historia.respository';
import { ListaRespository } from './lista.respository';
import { ProjetoRespository } from './projeto.respository';
import { QuadroRespository } from './quadro.respository';
import { TipoTarefaRespository } from './tipoTarefa.respository';

const listOfRepo = [
  TypeOrmModule.forFeature([
    EtiquetaRespository,
    TipoTarefaRespository,
    ProjetoRespository,
    EpicoRespository,
    QuadroRespository,
    ListaRespository,
    HistoriaRespository,
  ]),
];

@Module({
  imports: listOfRepo,
  exports: listOfRepo,
})
export class RepositoryModule {}
