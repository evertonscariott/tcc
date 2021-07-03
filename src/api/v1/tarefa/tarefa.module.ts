import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { TarefaController } from './tarefa.controller';
import { TarefaService } from './tarefa.service';

@Module({
  controllers: [TarefaController],
  providers: [TarefaService],
  imports: [InfraModule],
})
export class TarefaModule {}
