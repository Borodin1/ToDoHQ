import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/store";

import { formattedDate } from "../../shared/lib";
import { deleteTask } from '../../entities/todos/api';
import { toast } from 'react-toastify';

export const useSelectedTask = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const tasks = useAppSelector((state) => state.todos.todos);

  const selectedTask = (id: string) => {
    return tasks.find((task) => task.id === Number(id));
  };

  const { taskId } = useParams();
  const task = taskId ? selectedTask(taskId) : null;

  const handleDeleteTask = (id:number)=>{
    if(id){
      dispatch(deleteTask(id))
      navigate('/')
      toast.success(`You successfully deleted todo #${id}`);
    }
  }

  useEffect(() => {
    if (!task) {
      navigate("/");
    }
  }, [task, navigate]);

  return { selectedTask, formattedDate, task,handleDeleteTask };
};
