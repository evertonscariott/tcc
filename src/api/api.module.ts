import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { EpicoModule } from './v1/epico/epico.module';
import { EtiquetaModule } from './v1/etiqueta/etiqueta.module';
import { ListaModule } from './v1/lista/lista.module';
import { ProjetoModule } from './v1/projeto/projeto.module';
import { QuadroModule } from './v1/quadro/quadro.module';
import { TipoTarefaModule } from './v1/tipoTarefa/tipoTarefa.module';
import { V1Module } from './v1/v1.module';

const routes: Routes = [
  {
    path: '/v1',
    module: V1Module,
    children: [
      {
        path: '/etiqueta',
        module: EtiquetaModule,
      },
      {
        path: '/tipoTarefa',
        module: TipoTarefaModule,
      },
      {
        path: '/projeto',
        module: ProjetoModule,
      },
      {
        path: '/epico',
        module: EpicoModule,
      },
      {
        path: '/quadro',
        module: QuadroModule,
      },
      {
        path: '/lista',
        module: ListaModule,
      },
    ],
  },
];

@Module({
  imports: [RouterModule.forRoutes(routes), V1Module],
})
export class ApiModule {}
