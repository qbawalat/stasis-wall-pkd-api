import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type PkdNumberDocument = HydratedDocument<PkdNumber>;

@Schema()
export class PkdNumber {
  @Prop()
  id: string;

  @Prop()
  description: string;
}

export const PkdNumberSchema = SchemaFactory.createForClass(PkdNumber);
