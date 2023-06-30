import { Injectable } from '@nestjs/common';

@Injectable()
export class PkdQueryService {
  findPkd(profession: string) {
    throw new Error('No repository found');
  }
}
