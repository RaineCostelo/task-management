import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, hideLoading, showLoading } from './list/tasksListSlice';
import { GetTasks } from './list/tasksListService';
import TasksList from './list/tasksList';

const TasksContainer = () => {
    const dispatch = useDispatch();
    const rows = useSelector((state => state.tasksListSlice.rows));
    const isLoading = useSelector((state => state.tasksListSlice.isLoading));

    useEffect(() => {
        const getData = async () => {
            dispatch(showLoading());
            try {
                const data = await GetTasks();
                if (data) {
                    dispatch(getTasks(data));
                }
            } catch (error) {
                console.error('tasksContainer-getData error: ', error);
            }
            dispatch(hideLoading());
        };

        getData();
    }, [dispatch]);

    return (

        <TasksList
            rows={rows}
            isLoading={isLoading}    
        />
    );
};

export default TasksContainer;