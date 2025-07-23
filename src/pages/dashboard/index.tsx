import { useEffect, useRef } from "react";
import { useAppSelector } from "../../app/store";
import { TaskOverview } from "../../widgets/task-overview";

export const Dashboard: React.FC = () => {
  const { firstName, lastName } = useAppSelector((state) => state.auth.user);
  const renderRef = useRef(true);

  useEffect(() => {
    if (renderRef.current) {
      renderRef.current = false;
      return;
    }

  }, [firstName, lastName]);

  return (
    <div className="h-full flex flex-col p-6">
      <h2 className="text-4xl font-medium mb-6 md:text-3xl max-sm:text-sm max-sm:font-bold">
        Welcome back, {firstName} {lastName}👋
      </h2>
      <TaskOverview />
    </div>
  );
};
