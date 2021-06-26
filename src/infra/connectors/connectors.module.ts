import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { configService } from './database';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  providers: [],
  exports: [HttpModule],
})
export class ConnectorsModule {
  constructor(private connection: Connection) {}
}
