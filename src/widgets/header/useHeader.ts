import { useMemo, useState } from 'react';
import { useAppSelector } from '../../app/store';

export const useHeader =()=>{
    const [query, setQuery] = useState<string>("");
      const [isOpen, setIsOpen] = useState<boolean>(false);
      const [selectedDate, setSelectedDate] = useState(new Date());
    
    
      const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(!isOpen);
      };
    
      const tasks = useAppSelector((state) => state.todos.todos);

      const filteredTasks = useMemo(() => {
        if (!query.trim()) return [];
    
        return tasks.filter((task) => {
          return `${task.title} ${task.description} ?? ""`
            .toLowerCase()
            .includes(query.toLowerCase());
        });
      }, [query, tasks]);
    

      return {
        query,
        setQuery,
        isOpen,
        setIsOpen,
        selectedDate,
        setSelectedDate,
        handleClick,
        filteredTasks 
      }
}