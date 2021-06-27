import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { ProjetoController } from './projeto.controller';
import { ProjetoService } from './projeto.service';

@Module({
  controllers: [ProjetoController],
  providers: [ProjetoService],
  imports: [InfraModule],
})
export class EtiquetaModule {}
