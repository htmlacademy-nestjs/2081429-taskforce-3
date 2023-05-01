import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { TaskUserModule } from './task-user/task-user.module';
import {
  ConfigUsersModule,
  getMongooseOptions,
} from '@project/config/config-users';
import { MongooseModule } from '@nestjs/mongoose';
import { NotifyModule } from './notify/notify.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';

@Module({
  imports: [
    AuthenticationModule,
    TaskUserModule,
    ConfigUsersModule,
    NotifyModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
    RefreshTokenModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
