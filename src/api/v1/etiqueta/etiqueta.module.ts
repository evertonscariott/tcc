import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { EtiquetaController } from './etiqueta.controller';

import { EtiquetaService } from './etiqueta.service';

@Module({
  controllers: [EtiquetaController],
  providers: [EtiquetaService],
  imports: [InfraModule],
})
export class EtiquetaModule {}
