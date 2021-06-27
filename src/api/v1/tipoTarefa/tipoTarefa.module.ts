import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { TipoTarefaController } from './tipoTarefa.controller';
import { TipoTarefaService } from './tipoTarefa.service';

@Module({
  controllers: [TipoTarefaController],
  providers: [TipoTarefaService],
  imports: [InfraModule],
})
export class TipoTarefaModule {}
