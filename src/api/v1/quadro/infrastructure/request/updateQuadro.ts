import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export default class UpdateQuadro {
  @ApiProperty({ example: 1 })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'XYZ' })
  @IsString()
  nome: string;

  @ApiProperty({ example: 'XYZ' })
  @IsString()
  situacao: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  id_projeto: number;
}
