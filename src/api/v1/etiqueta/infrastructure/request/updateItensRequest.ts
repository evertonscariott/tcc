import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export default class EtiquetaRequest {
  @ApiProperty({ example: '2021/03/23' })
  @IsString()
  deliveryDate: Date;

  @ApiProperty({ example: 'OC495824' })
  @IsString()
  purchaseOrder: string;
}
