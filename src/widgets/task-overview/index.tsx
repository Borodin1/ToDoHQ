// import { PulseLoader } from "react-spinners";
import { PulseLoader } from 'react-spinners';
import { TaskBoard } from "./ui/task-board";
import { TaskResults } from "./ui/task-results";
import { useTaskOverview } from "./useTaskOverview";

export const TaskOverview: React.FC = () => {
  const { todos, formattedDate, isOpenModal } = useTaskOverview();
  return (
    <div className="flex flex-row flex-1 w-full min-h-0 p-5  gap-5 border border-zinc-200 rounded-xs justify-center max-xl:flex-col">
      {!todos ? (
        <PulseLoader />
      ) : (
        <>
          <TaskBoard
            todos={todos}
            formattedDate={formattedDate}
            isOpenModal={isOpenModal}
          />

          <TaskResults />
        </>
      )}
    </div>
  );
};
