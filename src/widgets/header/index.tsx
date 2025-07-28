//Core
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

//hooks
import { useHeader } from "./useHeader";

//Components
import { Input, Button } from "../../shared/components";

//Icons
import { CiSearch } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Header: React.FC = () => {
  const { query, setQuery, isOpen, selectedDate, handleClick, filteredTasks } =
    useHeader();

  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    document.documentElement.classList.toggle("dark", newTheme === "dark");

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  return (
    <>
      <div
        className={`flex flex-row justify-around items-center ${
          theme === "dark" ? "dark" : ""
        } dark:bg-[#1E1E2F] bg-[#f8f8f8] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.07)] pt-9 pb-6 max-[600px]:justify-around max-[500px]:justify-center ${theme}`}>
        <div>
          <Link to="/">
            <h1
              className={` dark:text-[#FF6A6A] text-[#FF6767] font-bold text-[32px]`}>
              ToDoHQ
            </h1>
          </Link>
        </div>

        <div className="flex flex-row items-center">
          <div className="relative max-[500px]:hidden">
            <Input
              className={`h-9 w-[695px] rounded-1xl p-1.5 pr-12 dark:bg-[#2A2A3B] dark:border-[#3A3A4D] dark:text-[#ffff] dark:placeholder-[#AAAAAA] dark:focus:ring-2 dark:focus:ring-[#FF6A6A] bg-[#f5f8ff] shadow-lg max-[1100px]:w-[500px] max-[770px]:w-[350px]`}
              placeholder="Search your task here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              className={`absolute right-2 top-1/2 -translate-y-[14px] w-[36px] h-9 dark:bg-[#FF6A6A] bg-[#FF9090] rounded-[8px] grid place-items-center text-white cursor-pointer text-[20px]`}
              title={CiSearch}
            />
          </div>
        </div>

        <div className="flex flex-row items-center gap-[9px] max-[600px]:hidden">
          <Button
            className={`w-[36px] h-[36px]  dark:bg-[#FF6A6A] bg-[#FF9090] rounded-[5px] place-items-center text-white cursor-pointer text-[20px] transition-transform duration-700 ease-in-out hover:scale-110`}
            title={theme === "dark" ? CiDark : CiLight}
            onClick={toggleTheme}
          />
          <Button
            className={`w-[36px] h-[36px] dark:bg-[#FF6A6A] bg-[#FF9090] rounded-[5px] place-items-center text-white cursor-pointer text-[20px] transition-transform duration-700 ease-in-out hover:scale-110`}
            title={FaRegCalendarAlt}
            onClick={handleClick}
          />
        </div>

        {filteredTasks.length > 0 && (
          <div className="absolute top-[85px] left-[400px] w-[695px] bg-white border rounded-md shadow-md max-h-60 overflow-y-auto z-10 max-[600px]:justify-around max-[500px]:justify-center ">
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
            right: "10px",
          }}>
          <DatePicker selected={selectedDate} inline />
        </div>
      )}
    </>
  );
};
