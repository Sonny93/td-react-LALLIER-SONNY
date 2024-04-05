export type Task = {
  id: number;
  text: string;
  description: string;
  completed: boolean;
};

export type PartialTask = Omit<Task, "id" | "createdAt" | "completed">;

export type TaskList = Task[];
