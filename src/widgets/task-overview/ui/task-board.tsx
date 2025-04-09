import todoIMG from "../../../assets/images/to-do.png";
import { ITodo } from "../../../entities/todos/model/types";
import { TaskList } from '../../../features/task-list';


interface IProps {
  todos: ITodo[];
  formattedDate:(date:string)=>string
}

export const TaskBoard: React.FC<IProps> = ({ todos,formattedDate}) => {

  return (
    <div className="w-[466px] h-full flex flex-col p-3 border border-zinc-100 rounded-xl shadow-md bg-white">
      <div className="flex items-center justify-between">
        <div className='flex items-center'>
        <img
          src={todoIMG}
          alt="to-do"
          className="w-[28px] h-[31px] object-contain"
        />
        <h3 className="text-[15px] font-semibold text-[#FF6767] p-3">To-Do</h3>
        </div>
        <div className='flex items-center gap-1 cursor-pointer'>
          <span className='text-xl text-[#FF6767]'>+</span>
          <p className='text-[12px] text-gray-400 font-normal'>Add Task</p>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex text-center justify-center">
          {todos ? todos.map((todo)=><TaskList todo={todo} formattedDate={formattedDate}/>) : "You don't have any tasks."}
        </div>
      </div>
    </div>
  );
};
