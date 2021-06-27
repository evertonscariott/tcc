import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { EpicoController } from './epico.controller';
import { EpicoService } from './epico.service';

@Module({
  controllers: [EpicoController],
  providers: [EpicoService],
  imports: [InfraModule],
})
export class EpicoModule {}
