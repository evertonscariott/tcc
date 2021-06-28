import { Module } from '@nestjs/common';

import { InfraModule } from '../../infra/infra.module';
import { EpicoModule } from './epico/epico.module';
import { EtiquetaModule } from './etiqueta/etiqueta.module';
import { HistoriaModule } from './historia/historia.module';
import { ListaModule } from './lista/lista.module';
import { ProjetoModule } from './projeto/projeto.module';
import { QuadroModule } from './quadro/quadro.module';
import { TipoTarefaModule } from './tipoTarefa/tipoTarefa.module';

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
  ],
})
export class V1Module {}
