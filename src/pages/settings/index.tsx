import { Link } from "react-router-dom";
import { SettingsForm } from '../../features/settings-form';

export const SettingsPage: React.FC = () => {
  return (
    <div className="flex flex-row  w-full p-5 gap-5 border border-zinc-200 rounded-xs justify-center max-xl:flex-col">
      <div className="w-full flex flex-col p-3 border border-zinc-300 rounded-xl shadow-md bg-white max-xl:w-full">
        <div className="flex justify-between mb-4">
          <h2 className='text-base font-semibold underline decoration-[#F24E1E]'>Setting</h2>
          <Link to="../" className='cursor-pointer text-sm font-semibold underline'>Go back</Link>
        </div>
        <div className="flex flex-col gap-4">
          <SettingsForm/>
        </div>
      </div>
    </div>
  );
};
