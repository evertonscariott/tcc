import { Module } from '@nestjs/common';

import { InfraModule } from '../../infra/infra.module';
import { EtiquetaModule } from './etiqueta/etiqueta.module';
import { TipoTarefaModule } from './tipoTarefa/tipoTarefa.module';

@Module({
  imports: [InfraModule, EtiquetaModule, TipoTarefaModule],
})
export class V1Module {}
