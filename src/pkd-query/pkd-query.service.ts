import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PkdNumber } from './schemas/pkd-number.schema';
import { Model } from 'mongoose';
import { Profession, ProfessionDto } from './schemas/profession.schema';

@Injectable()
export class PkdQueryService {
  constructor(
    @InjectModel(Profession.name)
    private readonly professionModel: Model<Profession>,
  ) {}

  async find(professionAlias: string) {
    const profession = await this.professionModel
      .findOne({
        name: professionAlias,
      })
      .exec();

    return profession;
  }

  async post(profession: ProfessionDto) {
    const posted = await new this.professionModel({
      aliases: [profession.name],
      extraPkdNumbers: null,
      majorPkdNumber: null,
      name: profession.name,
    }).save();
    return posted as Profession;
  }
}
