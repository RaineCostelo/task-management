import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class CreateTasksDto {

    // title
    @ApiProperty({ example: 'Task 1'})
    @IsNotEmpty()
    title: string = "";

    // description
    @ApiProperty({ example: 'Task 1 description'})
    @IsNotEmpty()
    description: string = "";

    // due_date
    @ApiProperty({ example: 'May 06, 2025'})
    @IsNotEmpty()
    due_date: string = ""; // will refactor this later to use calendar

    // priority
    @ApiProperty({ example: 'low'})
    @IsNotEmpty()
    priority: string = "";

    // status
    @ApiProperty({ example: 'pending'})
    @IsNotEmpty()
    status: string = "";
}