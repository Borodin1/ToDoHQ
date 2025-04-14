import { useNavigate, useParams } from "react-router";
import { useAppSelector } from "../../app/store";

import { formattedDate } from "../../shared/lib";
import { useEffect } from "react";

export const useSelectedTask = () => {
  const navigate = useNavigate();
  const tasks = useAppSelector((state) => state.todos.todos);

  const selectedTask = (id: string) => {
    return tasks.find((task) => task.id === Number(id));
  };

  const { taskId } = useParams();
  const task = taskId ? selectedTask(taskId) : null;

  useEffect(() => {
    if (!task) {
      navigate("/");
    }
  }, [task, navigate]);

  return { selectedTask, formattedDate, task };
};
