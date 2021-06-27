import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export default class UpdateEtiqueta {
  @ApiProperty({ example: 1 })
  @IsNumber()
  idEtiqueta: number;

  @ApiProperty({ example: 'XYZ' })
  @IsString()
  descricao: string;

  @ApiProperty({ example: 'vermelho' })
  @IsString()
  cor: string;
}
