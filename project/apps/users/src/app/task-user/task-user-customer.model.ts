import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserCustomer } from '@project/shared/app-types';

@Schema()

export class TaskUserCustomerModel extends Document implements UserCustomer {
  @Prop({
    required: true,
    default: 0,
  })
  public publishedTasksCount: number;

  @Prop({
    required: true,
    default: 0,
  })
  public newTasksCount?: number;

  @Prop({
    required: true,
    default: '',
  })
  public personalInfo?: string;

}

export const TaskUserCustomerSchema = SchemaFactory.createForClass(TaskUserCustomerModel);
