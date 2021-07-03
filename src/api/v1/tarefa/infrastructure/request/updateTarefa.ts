import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export default class UpdateTarefa {
  @ApiProperty({ example: 1 })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'Tipo X' })
  @IsString()
  nome: string;

  @ApiProperty({ example: 'Tipo X' })
  @IsString()
  descricao: string;

  @ApiProperty({ example: 'Tipo X' })
  @IsString()
  tempoEstimado: string;

  @ApiProperty({ example: 'Tipo X' })
  @IsString()
  tempoRealizado: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  tipoTarefaId: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  listaId: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  historiaId: number;

  @ApiProperty({ example: [1, 2, 3] })
  @IsArray()
  etiquetaIds: number[];
}
