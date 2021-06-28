import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { HistoriaController } from './historia.controller';
import { HistoriaService } from './historia.service';

@Module({
  controllers: [HistoriaController],
  providers: [HistoriaService],
  imports: [InfraModule],
})
export class HistoriaModule {}
