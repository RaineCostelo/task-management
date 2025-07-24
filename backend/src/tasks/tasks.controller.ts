import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
    constructor (
        private tasksService: TasksService
    ) {}

    @Post('create-task')
    @ApiOperation({ summary: 'Create a new task' })
    @ApiResponse({ status: 201, description: 'The task has been successfully created' })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    async create(@Body() dto: CreateTasksDto) {
        return await this.tasksService.create(dto);
    }

    @Get('get-all-tasks')
    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 201, description: 'Tasks retrieved successfully' })
    async findAll() {
        return await this.tasksService.findAll();
    }

    @Get('get-task/:id')
    @ApiOperation({ summary: 'Get a task' })
    @ApiResponse({ status: 201, description: 'Task retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Task not found' })
    async findOne(@Param('id') id: string) {
        return await this.tasksService.findOne(id);
    }

    @Put('update-task/:id')
    @ApiOperation({ summary: 'Update a task' })
    @ApiResponse({ status: 201, description: 'Task updated successfully' })
    @ApiResponse({ status: 404, description: 'Task not found' })
    async update(@Param('id') id: string, @Body() updateDto: UpdateTasksDto) {
        return await this.tasksService.update(id, updateDto);
    }

    @Delete('delete-task/:id')
    @ApiOperation({ summary: 'Delete a task' })
    @ApiResponse({ status: 201, description: 'Task deleted successfully' })
    @ApiResponse({ status: 404, description: 'Task not found' })
    async remove(@Param('id') id: string) {
        return await this.tasksService.remove(id);
    }
}

