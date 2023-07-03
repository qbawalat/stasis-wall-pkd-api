import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { PkdNumber } from './pkd-number.schema';

export type ProfessionDocument = HydratedDocument<Profession>;

@Schema()
export class Profession {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'PkdNumber' })
  majorPkdNumber: PkdNumber;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PkdNumber' }] })
  extraPkdNumbers: PkdNumber[];

  @Prop()
  aliases: string[];
}
export const ProfessionSchema = SchemaFactory.createForClass(Profession);
export type ProfessionDto = Pick<Profession, 'name'>;
