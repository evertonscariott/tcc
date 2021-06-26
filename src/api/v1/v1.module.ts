import { Module } from '@nestjs/common';

import { InfraModule } from '../../infra/infra.module';
import { EtiquetaModule } from './etiqueta/etiqueta.module';

@Module({
  imports: [InfraModule, EtiquetaModule],
})
export class V1Module {}
