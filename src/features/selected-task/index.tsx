import { useSelectedTask } from "./useSelectedTask";
import { TaskList } from "../task-list";

export const SelectedTask: React.FC = () => {
  const { handleDeleteTask,formattedDate, task,handleIsOpen,isOpenModal,handleCompleteTask } = useSelectedTask();

  return task ? (
    <TaskList todo={task} handleIsOpen={handleIsOpen} isOpenModal={isOpenModal} handleCompleteTask={handleCompleteTask} formattedDate={formattedDate} handleDeleteTask={handleDeleteTask} variant="detail" />
  ) : (
    <div>Task not found</div>
  );
};
