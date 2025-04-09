import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { fetchTodos } from '../../entities/todos/api';

export const useTaskOverview = ()=>{
    const dispatch = useAppDispatch();
    const todos = useAppSelector(state=>state.todos.todos)

    useEffect(()=>{
        dispatch(fetchTodos())
    },[dispatch])

    return {todos}
}