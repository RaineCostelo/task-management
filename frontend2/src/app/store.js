import { configureStore } from "@reduxjs/toolkit";
import tasksListSlice from "../features/tasks/list/tasksListSlice";

const store = configureStore({
    reducer: {
        tasksListSlice: tasksListSlice,
    },
});

export default store;