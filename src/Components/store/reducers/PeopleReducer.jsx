import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    info: null,
};

export const peopleSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        getPersonDetails: (state, action) => {
            state.info = action.payload;
        },
        removePersonDetails: (state, action) => {
            state.info = null;
        }
    },
});

// Action creators are generated for each case reducer function
export const { getPersonDetails, removePersonDetails } = peopleSlice.actions;

export default peopleSlice.reducer;