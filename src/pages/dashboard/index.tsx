import { useEffect, useRef } from "react";
import { useAppSelector } from "../../app/store";
import { TaskOverview } from "../../widgets/task-overview";

export const Dashboard: React.FC = () => {
  const { firstName, lastName } = useAppSelector((state) => state.auth.user);
  const { todos } = useAppSelector((state) => state.todos);
  const renderRef = useRef(true);

  useEffect(() => {
    if (renderRef.current) {
      renderRef.current = false;
      return;
    }

    console.log("Todos was refreshing.");
    
  }, [todos]);

  return (
    <div className="h-full flex flex-col p-6">
      <h2 className="text-4xl font-medium mb-6">
        Welcome back, {firstName} {lastName}👋
      </h2>
      <TaskOverview />
    </div>
  );
};
