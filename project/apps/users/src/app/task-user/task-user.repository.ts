import { CRUDRepository } from '@project/util/util-types';
import { Injectable } from '@nestjs/common';
import { TaskUserEntity } from './task-user.entity';
import { User } from '@project/shared/app-types';
import { TaskUserModel } from './task-user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TaskUserRepository implements CRUDRepository<TaskUserEntity, string, User> {
  constructor(
    @InjectModel(TaskUserModel.name) private readonly taskUserModel: Model<TaskUserModel>) {
  }

  public async create(item: TaskUserEntity): Promise<User> {
    const newTaskUser = new this.taskUserModel(item);
    return newTaskUser.save();
  }

  public async destroy(_id: string): Promise<void> {
    this.taskUserModel.deleteOne({_id});
  }

  public async findById(_id: string): Promise<User | null> {
    return this.taskUserModel
      .findOne({_id})
      .exec();
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.taskUserModel
      .findOne({email})
      .exec();
  }

  public async update(_id: string, item: TaskUserEntity): Promise<User> {
    return this.taskUserModel
      .findByIdAndUpdate(_id, item.toObject(), {new: true})
      .exec();
  }

  public async find(ids: string[]): Promise<User[] | null> {
    return this.taskUserModel
      .find({ _id: { $in: [...ids]}})
      .exec();
  }

}