//Core
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

//hooks
import { useHeader } from './useHeader';

//Components
import { Input, Button } from "../../shared/components";

//Icons
import { CiSearch } from "react-icons/ci";
import { RiNotification2Line } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";

export const Header: React.FC = () => {
  const {
    query,
    setQuery,
    isOpen,
    selectedDate,
    handleClick,
    filteredTasks
  } = useHeader();

  return (
    <>
      <div className="flex flex-row justify-around items-center bg-[#f8f8f8] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.07)] pt-9 pb-6 max-[600px]:justify-around max-[500px]:justify-center">
        <div>
          <Link to="/">
            <h1 className="text-[#FF6767] font-bold text-[32px]">ToDoHQ</h1>
          </Link>
        </div>

        <div className="flex flex-row items-center">
          <div className="relative max-[500px]:hidden">
            <Input
              className="h-9 w-[695px] rounded-1xl p-1.5 pr-12 bg-[#f5f8ff] shadow-lg max-[1100px]:w-[500px] max-[770px]:w-[350px]"
              placeholder="Search your task here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              className="absolute right-2 top-1/2 -translate-y-[14px] w-[36px] h-9 bg-[#FF9090] rounded-[8px] grid place-items-center text-white cursor-pointer text-[20px]"
              title={CiSearch}
            />
          </div>
        </div>

        <div className="flex flex-row items-center gap-[9px] max-[600px]:hidden">
          <Button
            className="w-[36px] h-[36px] bg-[#FF9090] rounded-[5px] place-items-center text-white cursor-pointer text-[20px]"
            title={RiNotification2Line}
          />
          <Button
            className="w-[36px] h-[36px] bg-[#FF9090] rounded-[5px] place-items-center text-white cursor-pointer text-[20px]"
            title={FaRegCalendarAlt}
            onClick={handleClick}
          />
        </div>

        {filteredTasks.length > 0 && (
          <div className="absolute top-[85px] left-[400px] w-[695px] bg-white border rounded-md shadow-md max-h-60 overflow-y-auto z-10 max-[600px]:justify-around max-[500px]:justify-center">
            {filteredTasks.map((task) => (
              <Link
                key={task.id}
                to={`/tasks/task/${task.id}`}
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setQuery("")}>
                <div className="flex w-[500px] justify-between">
                  <p>Title: {task.title}</p>
                  <p>Description:{task.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "80px",
            right: "10px"
          }}>
          <DatePicker selected={selectedDate} inline />
        </div>
      )}
    </>
  );
};
