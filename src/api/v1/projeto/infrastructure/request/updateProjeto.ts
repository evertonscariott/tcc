import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export default class UpdateProjeto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'XYZ' })
  @IsString()
  nome: string;
}
