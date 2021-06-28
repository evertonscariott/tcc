import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export default class UpdateHistoria {
  @ApiProperty({ example: 1 })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'XYZ' })
  @IsString()
  nome: string;

  @ApiProperty({ example: 'XYZ' })
  @IsString()
  descricao: string;

  @ApiProperty({ example: '2021/03/23' })
  @IsString()
  data_inicio: Date;

  @ApiProperty({ example: '2021/03/23' })
  @IsString()
  data_fim: Date;

  @ApiProperty({ example: 1 })
  @IsNumber()
  id_quadro: number;
}
