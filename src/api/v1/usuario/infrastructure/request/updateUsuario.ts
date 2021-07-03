import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export default class UpdateUsuario {
  @ApiProperty({ example: 1 })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'Tipo X' })
  @IsString()
  nome: string;

  @ApiProperty({ example: 'Tipo X' })
  @IsString()
  email: string;

  @ApiProperty({ example: 'Tipo X' })
  @IsString()
  usuario: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  capacidadeDia: number;

  @ApiProperty({ example: [1, 2, 3] })
  @IsArray()
  tarefasId: number[];

  @ApiProperty({ example: [1, 2, 3] })
  @IsArray()
  quadrosId: number[];
}
