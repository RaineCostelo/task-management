import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rows: [],
    isLoading: false,
};

export const tasksListSlice = createSlice({
    name: 'tasksListSlice',
    initialState,
    reducers: {
        showLoading(state) {
            return {
                ...state,
                isLoading: true,
            };
        },
        hideLoading(state) {
            return {
                ...state,
                isLoading: false,
            };
        },
        getTasks(state, action) {
            console.log("action: ", action.payload);
            return {
                ...state,
                rows: action.payload,
            };
        },
    },
});

export const {
    showLoading,
    hideLoading,
    getTasks,
} = tasksListSlice.actions;

export default tasksListSlice.reducer;