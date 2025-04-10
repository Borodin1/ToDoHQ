import completedImg from "../../../assets/images/todo-completed.png";
import { TaskList } from "../../../features/task-list";
import { useTaskOverview } from "../useTaskOverview";

export const TaskCompleted: React.FC = () => {
  const { todos, formattedDate } = useTaskOverview();
  return (
    <div className="flex-1 p-6 border border-zinc-100 rounded-xl shadow-md bg-white">
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
      <div className='flex justify-center'>
        {todos.filter(todo=>todo.completed).length > 0 ? (
          todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <TaskList todo={todo} formattedDate={formattedDate} />
            ))
        ) : (
          <p>No one task is complete</p>
        )}
      </div>
    </div>
  );
};
