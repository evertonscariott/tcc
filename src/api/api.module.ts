import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';

import { V1Module, routesV1 } from './v1/v1.module';

const routes: Routes = [
  {
    path: '/v1',
    module: V1Module,
    children: routesV1,
  },
];

@Module({
  imports: [RouterModule.forRoutes(routes), V1Module],
})
export class ApiModule {}
