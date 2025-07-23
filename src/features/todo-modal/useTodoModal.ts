import { useEffect } from "react";
import { ITodoModal } from "./types";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "../../app/store";
import { ITodoFetch } from "../../entities/todos/model/types";
import { createTask, updateTask } from "../../entities/todos/api";
import { isOpen } from "../../entities/todos/model/todosSlice";

export const useTodoModal = ({ mode, task }: ITodoModal) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset, formState } = useForm<ITodoFetch>();

  useEffect(() => {
    if (mode === "edit" && task) {
      reset({
        title: task.title || "",
        description: task.description || "",
        completed: task.completed || false,
        priority: ["extreme", "moderate", "low"].includes(task.priority)
          ? (task.priority as "extreme" | "moderate" | "low")
          : "low",
      });
    }
  }, [mode, task, reset, dispatch]);

  const onSubmit = (data: ITodoFetch) => {
    if (mode === "edit" && task?.id) {
      const updateData: ITodoFetch = {
        title: data.title || task.title,
        description: data.description || task.description,
        priority: (data.priority || task.priority) as
          | "extreme"
          | "moderate"
          | "low",
        completed:
          data.completed !== undefined ? data.completed : task.completed,
      };

      dispatch(updateTask({ id: task.id, todoData: updateData }));
    } else {
      const newData = { ...data, completed: false };
      dispatch(createTask(newData));
    }
    dispatch(isOpen());
    reset();
  };

  return {
    dispatch,
    register,
    handleSubmit,
    reset,
    formState,
    onSubmit,
    isOpen
  };
};
