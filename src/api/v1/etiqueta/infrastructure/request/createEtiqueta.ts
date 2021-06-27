import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export default class CreateEtiqueta {
  @ApiProperty({ example: 'XYZ' })
  @IsString()
  descricao: string;

  @ApiProperty({ example: 'vermelho' })
  @IsString()
  cor: string;
}
