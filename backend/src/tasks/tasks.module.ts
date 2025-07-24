import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tasks, TasksSchema } from 'src/schemas/tasks.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tasks.name, schema: TasksSchema }])],

  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService]
})
export class TasksModule {}
