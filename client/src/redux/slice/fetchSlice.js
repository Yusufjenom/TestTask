import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    data: []
};

const fetchSlice = createSlice({
    name: 'fetchData',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getData.pending, (state, action) => {
            state.status = 'Loading'
        })
    },

})