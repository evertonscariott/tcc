import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { UsuarioController } from './tarefa.controller';
import { UsuarioService } from './tarefa.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [InfraModule],
})
export class UsuarioModule {}
