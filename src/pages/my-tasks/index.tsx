import { useEffect, useRef } from "react";
import { Outlet, useOutlet } from "react-router";
import { TaskList } from "../../features/task-list";
import { useTaskOverview } from "../../widgets/task-overview/useTaskOverview";

export const MyTasks: React.FC = () => {
  const { todos, formattedDate } = useTaskOverview();

  const outlet = useOutlet();
  const outletRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outletRef.current) {
      outletRef.current.focus();
    }
  }, [outlet]);

  return (
    <div className="flex justify-around p-5 items-center w-full h-[500px] mt-10 max-xl:flex-col max-xl:gap-2">
      <div className="flex flex-col mt-5 text-left border-2 border-gray-300 rounded-xl p-5 gap-2">
        <h2 className="underline decoration-orange-500 font-bold p-2">
          My Tasks
        </h2>
        <div className='overflow-auto max-h-[450px]'>
        {todos.map((todo) => (
          <TaskList
            key={todo.id}
            todo={todo}
            formattedDate={formattedDate}
            basePath="/my-tasks"
          />
        ))}
        </div>
      </div>

      <div
        className="border-2 border-gray-300 rounded-xl w-[450px] mt-10 h-[550px] flex items-center justify-center"
        tabIndex={-1}
        ref={outletRef}>
        {outlet ? <Outlet /> : <h2>Choose a task to view details</h2>}
      </div>
    </div>
  );
};
