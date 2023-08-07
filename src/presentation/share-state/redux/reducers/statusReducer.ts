import {createSlice} from '@reduxjs/toolkit'

const statusSlice = createSlice({
    name: 'addStatus',
    initialState: {
        statusData: {
            status: false,
        }
    },
    reducers : {
        addStatus : (state, action) => {
            state.statusData = action.payload;
        },
    }
})

export const statusReducer = statusSlice.reducer;
export const {addStatus} = statusSlice.actions;

export const statusSelecter = (state : any) => state.statusReducer.statusData;



