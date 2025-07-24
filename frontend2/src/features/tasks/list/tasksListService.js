import { hideLoading, showLoading } from "./tasksList";
import axios from 'axios';

const apiBaseUrl = 'http://localhost:3000/tasks';

export const GetTasks = async (
    dispatch
) => {
    try {
        const result = await axios.get(
            `${apiBaseUrl}/get-all-tasks`
        );

        return result.data;
    } catch (error) {
        console.error("GetTasks error: ", error);
    }
};