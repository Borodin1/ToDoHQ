import { useSelectedTask } from "./useSelectedTask";
import { TaskList } from "../task-list";

export const SelectedTask: React.FC = () => {
  const {  formattedDate,task } = useSelectedTask();

  return task ? (
    <TaskList todo={task} formattedDate={formattedDate} variant="detail" />
  ) : (
    <div>Task not found</div>
  );
};
