import { Controller } from '@nestjs/common';
import { PkdQueryService } from './pkd-query.service';

@Controller('pkd-query')
export class PkdQueryController {
  constructor(private readonly pkdQueryService: PkdQueryService) {}

  get(profession: string) {
    return this.pkdQueryService.findPkd(profession);
  }
}
