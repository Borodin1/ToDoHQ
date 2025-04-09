import { TaskCompleted } from './task-completed'
import { TaskStatus } from './task-status'

export const TaskResults:React.FC=()=>{
    return(
         <div className="flex flex-col flex-1 gap-6">
                  <TaskStatus/>
                  <TaskCompleted/>
        </div>
    )
}