import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/store";

import { formattedDate } from "../../shared/lib";
import { deleteTask, updateTask } from "../../entities/todos/api";
import { toast } from "react-toastify";
import { isOpen } from "../../entities/todos/model/todosSlice";
import { ITodoFetch } from "../../entities/todos/model/types";

export const useSelectedTask = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.todos.todos);
  const isOpenModal = useAppSelector((state) => state.todos.isOpenModal);

  const selectedTask = (id: string) => {
    return tasks.find((task) => task.id === Number(id));
  };

  const { taskId } = useParams();
  const task = taskId ? selectedTask(taskId) : null;

  const handleDeleteTask = (id: number) => {
    if (id) {
      dispatch(deleteTask(id));
      navigate("/");
      toast.success(`You successfully deleted todo #${id}`);
    }
  };

  const handleIsOpen = () => {
    dispatch(isOpen());
  };

  const handleCompleteTask = (id: number, todo: ITodoFetch) => {
    if (id) {
      const completedTask = {
        title: todo.title,
        description: todo.description,
        priority: todo.priority,
        completed: true,
      };
      dispatch(updateTask({ id: id, todoData: completedTask }));
      navigate("/");
      toast.success(`You successfully completed the task-${id}.`);
    } else {
      navigate("/");
      toast.error("Something went wrong.");
    }
  };

  useEffect(() => {
    if (!task) {
    navigate("/my-tasks");
    }
  }, [task, navigate]);

  return {
    selectedTask,
    formattedDate,
    task,
    handleDeleteTask,
    handleCompleteTask,
    isOpenModal,
    handleIsOpen,
  };
};
