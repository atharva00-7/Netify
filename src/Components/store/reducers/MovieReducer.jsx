import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    info: null,
};

export const movieSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        getMovieDetails: (state, action) => {
            state.info = action.payload;
        },
        removeMovieDetails: (state, action) => {
            state.info = null;
        }
    },
});

// Action creators are generated for each case reducer function
export const { getMovieDetails, removeMovieDetails } = movieSlice.actions;

export default movieSlice.reducer;