import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export default class CreateProjeto {
  @ApiProperty({ example: 'XYZ' })
  @IsString()
  nome: string;
}
