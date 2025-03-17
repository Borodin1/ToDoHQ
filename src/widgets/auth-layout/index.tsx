import { Outlet } from "react-router";

export const AuthLayout: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-[url(../assets/images/bg.png)] bg-[#F97171] w-full h-screen">
      
      <div className='flex justify-center items-center w-full h-full'>
      <div className="flex justify-center items-center w-full h-full my-[128px] max-[500px]:h-[80%] max-[500px]:my-[0px]">
      <div className="bg-white w-[90%] h-[90%] shadow-lg rounded-2xl flex justify-evenly max-[514px]:h-full max-[700px]:justify-center">
        <Outlet />
        </div>
        </div>
      </div>
    </div>
  );
};
