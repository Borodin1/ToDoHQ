import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { isAxiosError } from 'axios';

export const fetchTodos = createAsyncThunk(
    'todos/fetchAll',
    async(_,thunkAPI)=>{
        const url = import.meta.env.VITE_API_URL
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get(`${url}/todos`,
                {headers:{
                    Authorization:`Bearer ${token}`
                }}
            )
            const data = response.data
            console.log(data)
            localStorage.setItem('todos',JSON.stringify(data));

            return data;

        } catch (error:unknown) {
            if (isAxiosError(error)) {
                    return thunkAPI.rejectWithValue({ message: error.message });
                  } else {
                    return thunkAPI.rejectWithValue({
                      message: "An unknown error occurred",
                    });
                  }
        }
    }
)