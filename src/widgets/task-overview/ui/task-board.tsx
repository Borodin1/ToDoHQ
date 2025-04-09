import todoIMG from "../../../assets/images/to-do.png";
import { ITodo } from "../../../entities/todos/model/types";
import { CiImageOn } from "react-icons/ci";

interface IProps {
  todos: ITodo[];
}

export const TaskBoard: React.FC<IProps> = ({ todos }) => {
  const formattedDate = (createdAt: string) => {
    const date = new Date(createdAt);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const todoList = todos.map((todo) => {
    return (
      <div
        key={todo.id}
        className="flex w-[402px] h-[166px] border-2 border-gray-300 rounded-xl p-2 text-center justify-between">
        <div className="flex items-start ">
          <div
            className={`w-3 h-3 ${
              todo.completed ? "border-blue-500" : "border-red-500"
            } rounded-full border-[3px] flex items-center justify-center`}>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col justify-between text-center">
          <div className="h-[120px] w-[250px] flex justify-between gap-5 items-center ">
            <div className="flex flex-col justify-between">
              <h3 className="text-base font-semibold ">{todo.title}</h3>
              <p className="text-sm font-normal text-gray-500 mt-2.5">
                {todo.description}
              </p>
            </div>
            <div>
              <CiImageOn size={88} />
            </div>
          </div>
          <div className="text-[10px] flex flex-row gap-3 justify-center">
            <p className="capitalize">Priority:{todo.priority}</p>
            <p>Created on: {formattedDate(todo.createdAt)}</p>
          </div>
        </div>
        <div className="flex items-start text-2xl">
          <div className="flex gap-0.5 p-1 cursor-pointer">
            <div className="w-2 h-2 border-2 rounded-full bg-white text-gray-500"></div>
            <div className="w-2 h-2 border-2  rounded-full bg-white text-gray-500"></div>
            <div className="w-2 h-2 border-2  rounded-full bg-white text-gray-500"></div>
          </div>
        </div>
      </div>
    );
  });
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
          {todos ? todoList : "You don't have any tasks."}
        </div>
      </div>
    </div>
  );
};
