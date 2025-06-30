import { useTaskOverview } from "../useTaskOverview";
import { TaskCircular } from '../../../shared/components/task-circular';
import status from '../../../assets/images/task-status.png'

export const TaskStatus: React.FC = () => {
  const { completed,percentHelper,notCompleted } = useTaskOverview();
  
  return (
    <div className="flex-1 px-6 border border-zinc-100 rounded-xl shadow-md bg-white w-full min-h-[250px] max-sm:min-h-[100px]">
      <div className='flex items-center'>
      <img src={status} alt='status' />
      <h3 className="text-[15px] font-semibold text-[#FF6767] p-3">Task Status</h3>
      </div>
      <div className='flex justify-center gap-5 max-sm:flex-col max-sm:gap-0 max-sm:items-center'>
      <TaskCircular completed={completed} percentHelper={percentHelper} circularColor="#05A301"description='Completed'/>
      <TaskCircular completed={notCompleted} percentHelper={percentHelper} circularColor="#F21E1E" description='Not Started'/>
      </div>
    </div>
  );
};
