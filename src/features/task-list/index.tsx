import { CiImageOn } from "react-icons/ci";
import { AdditionInfo } from "../../shared/components";
import { ITodo } from '../../entities/todos/model/types';

interface ITaskList{
    todo:ITodo,
    formattedDate:(date:string)=>string
}

export const TaskList: React.FC<ITaskList> = ({ todo, formattedDate }) => {
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
      <AdditionInfo />
    </div>
  );
};
