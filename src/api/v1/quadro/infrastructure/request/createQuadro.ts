import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export default class CreateQuadro {
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
