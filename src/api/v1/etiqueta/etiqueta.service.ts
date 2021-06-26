import { Injectable } from '@nestjs/common';

@Injectable()
export class EtiquetaService {
  constructor() {}

  async removeItemFromOrder(): Promise<any> {
    return 'hello';
  }
}
