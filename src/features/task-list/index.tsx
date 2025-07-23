import { Link } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";
import { AdditionInfo } from "../../shared/components";
import { TodoModal } from "../todo-modal";
import { ITodo } from "../../entities/todos/model/types";
import { FaEdit, FaExclamation, FaTrash } from "react-icons/fa";

interface ITaskList {
  todo: ITodo;
  formattedDate: (date: string) => string;
  variant?: "list" | "detail";
  handleDeleteTask?: (id: number) => void;
  isOpenModal?: boolean;
  handleIsOpen?: () => void;
  basePath: string
  handleCompleteTask?: (id: number, todo: ITodo) => void;
}

export const TaskList: React.FC<ITaskList> = ({
  todo,
  formattedDate,
  handleDeleteTask,
  variant = "list",
  isOpenModal,
  handleIsOpen,
  basePath,
  handleCompleteTask,
}) => {
  if (variant === "list") {
    return (
      <div
        key={todo.id}
        className="flex w-[400px] h-[166px] gap-5 border-2 border-gray-300 rounded-xl p-2 text-center justify-between max-lg:w-full max-lg:justify-center">
        <div className="flex items-start ">
          <div
            className={`w-3 h-3 ${
              todo.completed ? "border-blue-500" : "border-red-500"
            } rounded-full border-[3px] flex items-center justify-center`}>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col justify-between text-center max-lg:justify-center">
          <Link to={`${basePath}/task/${todo.id}`}>
            <div className="h-[120px] w-[250px] flex justify-between gap-5 items-center max-lg:w-[150px] max-lg:justify-center">
              <div className="flex flex-col justify-around max-lg:justify-center">
                <h3 className="text-base font-semibold ">{todo.title}</h3>
                <p className="text-sm font-normal text-gray-500 mt-2.5 overflow-hidden  truncate h-[50px] w-[150px] ">
                  {todo.description}
                </p>
              </div>
              <div className="max-lg:hidden">
                <CiImageOn size={88} />
              </div>
            </div>
            <div className="flex flex-row gap-3 justify-center max-lg:flex-col max-lg:gap-0">
              <p className="text-[10px] capitalize">Priority: <span className={`${ todo.priority === 'extreme' ? 'text-[#F21E1E]' : todo.priority === 'moderate' ? 'text-[#42ADE2]': 'text-[#05A301]'}`}>{todo.priority}</span></p>
              <p className="text-[10px] text-[#A1A3AB]">
                Created on: {formattedDate(todo.createdAt)}
              </p>
            </div>
          </Link>
        </div>
        <AdditionInfo />
      </div>
    );
  } else {
    return (
      <div className="w-full p-8 max-lg:p-3">
        <div className="flex justify-start max-lg:flex-col">
          <div className='max-sm:hidden'>
            <CiImageOn size={100} />
          </div>
          <div className="flex flex-col-reverse justify-between w-full p-3">
            <div className="flex flex-col gap-3.5">
              <h3 className="text-2xl font-semibold">{todo?.title}</h3>
              <div className="flex flex-col gap-5 max-lg:gap-20">
              <p className="text-[12px] capitalize">Priority: <span className={`${ todo.priority === 'extreme' ? 'text-[#F21E1E]' : todo.priority === 'moderate' ? 'text-[#42ADE2]': 'text-[#05A301]'}`}>{todo.priority}</span></p>

                <p className="text-[10px] text-gray-400">
                  Created on: {formattedDate(todo?.createdAt || "")}
                </p>
              </div>
            </div>
            <div className='flex flex-col items-end'>
              <Link
                to=".."
                className="text-sm underline font-semibold max-lg:hidden">
                Go back
              </Link>
            </div>
          </div>
        </div>
        <div className="flex mt-2 min-h-[350px] p-3">
          <p className="text-lg text-gray-400">{todo?.description}</p>
        </div>
        <div className="flex justify-end gap-2">
          <FaTrash
            className="border-2 bg-[#FF6767] rounded-lg p-1.5 cursor-pointer"
            size={35}
            color="white"
            onClick={() => handleDeleteTask && handleDeleteTask(todo.id)}
          />
          <FaEdit
            className="border-2 bg-[#FF6767] rounded-lg p-1.5 cursor-pointer"
            size={35}
            color="white"
            onClick={() => handleIsOpen && handleIsOpen()}
          />
          <FaExclamation
            className="border-2 bg-[#FF6767] rounded-lg p-1.5 cursor-pointer"
            size={35}
            color="white"
            onClick={() =>
              handleCompleteTask && handleCompleteTask(todo.id, todo)
            }
          />
        </div>
        {isOpenModal && <TodoModal mode="edit" task={todo} />}
      </div>
    );
  }
};
