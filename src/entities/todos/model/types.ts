export interface ITodoInitialState {
  todos: ITodo[];
  isLoading:boolean;
  isError:boolean;
}

export interface ITodo {
  completed: boolean;
  createdAt: string;
  description: string;
  id: number;
  priority: "extreme"| "moderate" | "low";
  publishedAt: null;
  title: string;
  updatedAt: string;
}
