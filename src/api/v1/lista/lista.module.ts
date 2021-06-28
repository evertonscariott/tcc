import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { ListaController } from './lista.controller';
import { ListaService } from './lista.service';

@Module({
  controllers: [ListaController],
  providers: [ListaService],
  imports: [InfraModule],
})
export class ListaModule {}
