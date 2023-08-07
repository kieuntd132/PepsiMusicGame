import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'react';
import { rtdb } from '../../../../core/API/Url/RealTimeDB';
import { User } from '../../../../core/model/User';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: {
            keyUser: '',
            name: '',
            phone: '',
            image: '',
            react: 0,
            video: 0,
        }
    },
    reducers: {
        addUser: (state, action) => {
            state.userData = action.payload;
        },
    },
})


export const userReducer = userSlice.reducer;
export const { addUser } = userSlice.actions;

export const userSelecter = (state: any) => state.userReducer.userData;