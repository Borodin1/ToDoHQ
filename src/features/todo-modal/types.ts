export interface ITodoModal {
  mode: "create" | "edit";
  task?: {
    id: number;
    title: string;
    description: string;
    priority: string;
    completed?: boolean;
  };
}