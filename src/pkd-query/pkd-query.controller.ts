import { Body, Controller, Get, Post } from '@nestjs/common';
import { PkdQueryService } from './pkd-query.service';
import { Profession, ProfessionDto } from './schemas/profession.schema';

@Controller('pkd-query')
export class PkdQueryController {
  constructor(private readonly pkdQueryService: PkdQueryService) {}

  @Get('professions')
  get(profession: string) {
    return this.pkdQueryService.find(profession);
  }

  @Post('professions')
  post(@Body() profession: ProfessionDto) {
    return this.pkdQueryService.post(profession);
  }
}
