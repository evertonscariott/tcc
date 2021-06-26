import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

const listOfRepo = [
  TypeOrmModule.forFeature([
    // OrderRepository,
  ]),
];

@Module({
  imports: listOfRepo,
  exports: listOfRepo,
})
export class RepositoryModule {}
