import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tasks, TasksDocument } from 'src/schemas/tasks.schema';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';

@Injectable()
export class TasksService {
    constructor(
        @InjectModel(Tasks.name) private tasksModel: Model<TasksDocument>,
    ) {}

    async create(data: Partial<Tasks>): Promise<TasksDocument> {
        try {
            const result = await new this.tasksModel(data);
            return result.save();
        } catch (error) {
            console.error("TasksService-create error: ", error);
            throw error;
        }
    }

    async findAll(): Promise<TasksDocument[]> {
        try {
            return await this.tasksModel.find().exec();
        } catch (error) {
            console.error("TasksService-findAll error: ", error);
            throw error;
        }
    }

    async findOne(id: string): Promise<TasksDocument> {
        try {
            const result = await this.tasksModel.findById(id).exec();
            if (!result) throw new NotFoundException('Task not found');
            return result
        } catch (error) {
            console.error("TasksService-findOne error: ", error);
            throw error;
        }
    }

    async update(id: string, updateDto: UpdateTasksDto): Promise<TasksDocument> {
        try {
            const result = await this.tasksModel.findByIdAndUpdate(
                id,
                updateDto,
                { new: true }
            ).exec();

            if (!result) throw new NotFoundException('Task not found');
            return result;
        } catch (error) {
            console.error("TasksService-update error: ", error);
            throw error;
        }
    }

    async remove(id: string): Promise<TasksDocument> {
        try {
            const result = await this.tasksModel.findByIdAndDelete(id).exec();

            if (!result) throw new NotFoundException('Task not found');
            return result;
        } catch (error) {
            console.error("TasksService-remove error: ", error);
            throw error;
        }
    }
}
