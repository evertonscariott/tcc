import { Module } from '@nestjs/common';
import { Routes } from 'nest-router';

import { InfraModule } from '../../infra/infra.module';
import { EpicoModule } from './epico/epico.module';
import { EtiquetaModule } from './etiqueta/etiqueta.module';
import { HistoriaModule } from './historia/historia.module';
import { ListaModule } from './lista/lista.module';
import { ProjetoModule } from './projeto/projeto.module';
import { QuadroModule } from './quadro/quadro.module';
import { TarefaModule } from './tarefa/tarefa.module';
import { TipoTarefaModule } from './tipoTarefa/tipoTarefa.module';
import { UsuarioModule } from './usuario/tarefa.module';

export const routesV1: Routes = [
  {
    path: '/etiqueta',
    module: EtiquetaModule,
  },
  {
    path: '/tipoTarefa',
    module: TipoTarefaModule,
  },
  {
    path: '/projeto',
    module: ProjetoModule,
  },
  {
    path: '/epico',
    module: EpicoModule,
  },
  {
    path: '/quadro',
    module: QuadroModule,
  },
  {
    path: '/lista',
    module: ListaModule,
  },
  {
    path: '/historia',
    module: HistoriaModule,
  },
  {
    path: '/tarefa',
    module: TarefaModule,
  },
  {
    path: '/usuario',
    module: UsuarioModule,
  },
];
@Module({
  imports: [
    InfraModule,
    EtiquetaModule,
    TipoTarefaModule,
    ProjetoModule,
    EpicoModule,
    QuadroModule,
    ListaModule,
    HistoriaModule,
    TarefaModule,
    UsuarioModule,
  ],
})
export class V1Module {}
