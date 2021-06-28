import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export default class CreateLista {
  @ApiProperty({ example: 'XYZ' })
  @IsString()
  nome: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  id_quadro: number;
}
