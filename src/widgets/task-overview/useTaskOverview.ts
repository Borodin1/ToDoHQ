import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { fetchTodos } from "../../entities/todos/api";
import { formattedDate } from "../../shared/lib";

export const useTaskOverview = () => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todos.todos);
  const loading = useAppSelector((state) => state.todos.isLoading);

  const isOpenModal = useAppSelector((state) => state.todos.isOpenModal);

  const completed = todos.filter((todo) => todo.completed).length;
  const notCompleted = todos.length - completed;

  const percentHelper = (result: number) => {
    return todos.length > 0 ? Math.round((result / todos.length) * 100) : 0;
  };

   const fetchedRef = useRef(false);

  useEffect(() => {
    if (!isOpenModal && !fetchedRef.current) {
      dispatch(fetchTodos());
      fetchedRef.current = true;
    }
  }, [dispatch, isOpenModal]);


  return {
    todos,
    formattedDate,
    completed,
    percentHelper,
    notCompleted,
    isOpenModal,
    loading,
  };
};
