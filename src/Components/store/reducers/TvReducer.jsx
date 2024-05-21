import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    info: null,
};

export const tvSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        getTvDetails: (state, action) => {
            state.info = action.payload;
        },
        removeTvDetails: (state, action) => {
            state.info = null;
        }
    },
});

// Action creators are generated for each case reducer function
export const { getTvDetails, removeTvDetails } = tvSlice.actions;

export default tvSlice.reducer;