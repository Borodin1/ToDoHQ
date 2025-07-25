import completedImg from "../../../assets/images/todo-completed.png";
import { TaskList } from "../../../features/task-list";
import { useTaskOverview } from "../useTaskOverview";

export const TaskCompleted: React.FC = () => {
  const { todos, formattedDate } = useTaskOverview();
  return (
    <div className="p-6 border border-zinc-100 rounded-xl w-full shadow-md bg-white max-lg:justify-center">
      <div className="flex items-center">
        <img
          src={completedImg}
          alt="img"
          className="w-[28px] h-[24px] object-contain"
        />
        <h3 className="text-[15px] font-semibold text-[#FF6767] p-3">
          Completed Tasks
        </h3>
      </div>
      <div className="flex justify-center flex-col pt-7 px-2  overflow-auto gap-2 h-[450px] md:items-center">
        {todos.filter((todo) => todo.completed).length > 0 ? (
          todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <TaskList
                key={todo.id}
                basePath="/tasks"
                todo={todo}
                formattedDate={formattedDate}
              />
            ))
        ) : (
          <div className="flex flex-col items-center justify-center h-[200px] w-full">
            <p className="text-lg text-gray-600">No one task is complete</p>
          </div>
        )}
      </div>
    </div>
  );
};
