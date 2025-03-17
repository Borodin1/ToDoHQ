import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from './types';
import { fetchAuth } from '../api';

const initialState:IAuthState = {
    token:null,
    user:{
    firstName:null,
    lastName:null,
    username:null,
    email:null},
    isLoading:false,
    isError:false
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
            builder.addCase(fetchAuth.pending,(state)=>{
                state.isLoading = true;
                state.isError = false;
            })
            builder.addCase(fetchAuth.fulfilled,(state,{payload})=>{
                state.isLoading = false;
                state.token = payload.jwt
                state.user = {
                    firstName:payload.user.firstName,
                    lastName:payload.user.lastName,
                    username:payload.user.username,
                    email:payload.user.email
                }
            })

            builder.addCase(fetchAuth.rejected,(state)=>{
                state.isLoading = false;
                state.isError = true
            })
    }
})

export const authReducer = authSlice.reducer