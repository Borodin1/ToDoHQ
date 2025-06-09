export interface ITodoInitialState {
  todos: ITodo[];
  isLoading: boolean;
  isError: boolean;
  isOpenModal: boolean;
}

export interface ITodo {
  completed: boolean;
  createdAt: string;
  description: string;
  id: number;
  priority: "extreme" | "moderate" | "low";
  publishedAt: null;
  title: string;
  updatedAt: string;
}

export interface ITodoFetch {
  title: string;
  description: string;
  priority: "extreme" | "moderate" | "low";
  completed: boolean;
}
