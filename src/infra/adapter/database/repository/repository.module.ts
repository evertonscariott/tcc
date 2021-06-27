import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtiquetaRespository } from './etiqueta.respository';
import { ProjetoRespository } from './projeto.respository';
import { TipoTarefaRespository } from './tipoTarefa.respository';

const listOfRepo = [
  TypeOrmModule.forFeature([
    EtiquetaRespository,
    TipoTarefaRespository,
    ProjetoRespository,
  ]),
];

@Module({
  imports: listOfRepo,
  exports: listOfRepo,
})
export class RepositoryModule {}
