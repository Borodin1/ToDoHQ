// interface IMyTask {}

import { Outlet, useOutlet } from 'react-router';
import { TaskList } from "../../features/task-list";
import { useTaskOverview } from "../../widgets/task-overview/useTaskOverview";
import { useEffect, useRef } from 'react';

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
    <div className="flex justify-around  p-5 items-center w-full mt-5 max-xl:flex-col max-xl:gap-2">
      <div className='flex flex-col text-left border-2 border-gray-300 rounded-xl p-5'>
        <h2 className='underline '>My Tasks</h2>
        {todos.map((todo) => (
          <TaskList key={todo.id} todo={todo} formattedDate={formattedDate} basePath='/my-tasks'/>
        ))}
      </div>
      <div className='border-2 border-gray-300 rounded-xl text-center h-full' tabIndex={-1}         ref={outletRef}
      >
        <Outlet/>
      </div>
    </div>
  );
};
