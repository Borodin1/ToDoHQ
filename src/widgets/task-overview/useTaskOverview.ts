import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { fetchTodos } from '../../entities/todos/api';

export const useTaskOverview = ()=>{
    const dispatch = useAppDispatch();
    const todos = useAppSelector(state=>state.todos.todos)

    const formattedDate = (createdAt: string) => {
        const date = new Date(createdAt);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      };

    useEffect(()=>{
        dispatch(fetchTodos())
    },[dispatch])

    return {todos,formattedDate}
}