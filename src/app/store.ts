import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../entities/auth/model/authSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { todosReducer } from '../entities/todos/model/todosSlice';

export const store = configureStore({
    reducer:{
        auth:authReducer,
        todos:todosReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()