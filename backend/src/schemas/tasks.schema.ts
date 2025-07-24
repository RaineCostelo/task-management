import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TasksDocument = Tasks & Document;

@Schema()
export class Tasks {

    // title
    @Prop({ required: true })
    title: string = "";

    // description
    @Prop({ required: true })
    description: string = "";

    // due_date
    @Prop({ required: true })
    due_date: string = ""; // will refactor this later to use calendar

    // priority
    @Prop({ required: true })
    priority: string = "";

    // status
    @Prop({ required: true })
    status: string = "";
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);