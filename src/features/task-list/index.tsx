import { CiImageOn } from "react-icons/ci";
import { AdditionInfo } from "../../shared/components";
import { ITodo } from "../../entities/todos/model/types";
import { Link } from 'react-router-dom';
import { FaEdit, FaExclamation, FaTrash } from 'react-icons/fa';

interface ITaskList {
  todo: ITodo;
  formattedDate: (date: string) => string;
  variant?: 'list' | 'detail'
}

export const TaskList: React.FC<ITaskList> = ({ todo, formattedDate,variant='list' }) => {
  if(variant === 'list'){
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
        <Link to={`task/${todo.id}`}>
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
        <div className="flex flex-row gap-3 justify-center">
          <p className="text-[10px] capitalize">Priority:{todo.priority}</p>
          <p className="text-[10px]">
            Created on: {formattedDate(todo.createdAt)}
          </p>
        </div>
        </Link>
      </div>
      <AdditionInfo />
    </div>
  )} else{
    return(
      <div className="w-full p-8">
              <div className="flex justify-start ">
                <div>
                  <CiImageOn size={200} />
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-3.5">
                    <h3 className="text-2xl font-semibold">{todo?.title}</h3>
                    <div className="flex flex-col gap-5">
                      <p className="text-[12px] capitalize">
                        Priority:{todo?.priority}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        Created on: {formattedDate(todo?.createdAt || "")}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Link to=".." className="text-sm underline font-semibold">
                      Go back
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex mt-14 min-h-[350px]">
                <p className="text-lg text-gray-400">{todo?.description}</p>
              </div>
              <div className="flex justify-end gap-6">
                <FaTrash
                  className="border-2 bg-[#FF6767] rounded-lg p-1.5 cursor-pointer"
                  size={35}
                  color="white"
                />
                <FaEdit
                  className="border-2 bg-[#FF6767] rounded-lg p-1.5 cursor-pointer"
                  size={35}
                  color="white"
                />
                <FaExclamation
                  className="border-2 bg-[#FF6767] rounded-lg p-1.5 cursor-pointer"
                  size={35}
                  color="white"
                />
              </div>
            </div>
    )
  }
};
