import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export default class UpdateTipoTarefa {
  @ApiProperty({ example: 1 })
  @IsNumber()
  idTipoTarefa: number;

  @ApiProperty({ example: 'nome Tarefa' })
  @IsString()
  nome: string;
}
