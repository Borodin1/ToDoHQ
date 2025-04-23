import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { fetchTodos } from "../../entities/todos/api";
import { formattedDate } from '../../shared/lib';

export const useTaskOverview = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const isOpenModal = useAppSelector((state)=>state.todos.isOpenModal)

  

  const completed = todos.filter((todo) => todo.completed).length;
  const notCompleted = todos.length - completed;

  const percentHelper = (result: number) => {
    return todos.length > 0 ? Math.round((result / todos.length) * 100) : 0;
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return { todos, formattedDate, completed, percentHelper, notCompleted,isOpenModal };
};
