import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes it available app-wide
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/tasks-management-db'),
    TasksModule,
  ],
})
export class AppModule {}
