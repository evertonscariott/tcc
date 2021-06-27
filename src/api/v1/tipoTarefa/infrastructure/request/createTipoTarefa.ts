import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export default class CreateTipoTarefa {
  @ApiProperty({ example: 'Tipo X' })
  @IsString()
  nome: string;
}
