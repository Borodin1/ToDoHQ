import { TaskBoard } from "./ui//task-board";
import { TaskResults } from "./ui/task-results";
import { useTaskOverview } from "./useTaskOverview";

export const TaskOverview: React.FC = () => {
  const { todos } = useTaskOverview();
  return (
    <div className="flex flex-1 min-h-0 p-5  gap-5 border border-zinc-200 rounded-xs">
      <TaskBoard todos={todos} />

      <TaskResults />
    </div>
  );
};
