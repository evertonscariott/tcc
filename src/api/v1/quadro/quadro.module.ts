import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { QuadroController } from './quadro.controller';
import { QuadroService } from './quadro.service';

@Module({
  controllers: [QuadroController],
  providers: [QuadroService],
  imports: [InfraModule],
})
export class QuadroModule {}
