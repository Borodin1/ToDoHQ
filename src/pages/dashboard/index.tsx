import { useAppSelector } from "../../app/store";
import { TaskOverview } from '../../widgets/task-overview';

export const Dashboard: React.FC = () => {
  const { firstName, lastName } = useAppSelector((state) => state.auth.user);
  return (
    <div className="h-full flex flex-col p-6">
        
      <h2 className="text-4xl font-medium mb-6">
        Welcome back, {firstName} {lastName}👋
      </h2>
        <TaskOverview/>
    </div>
  );
};
