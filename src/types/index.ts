export type Task = {
  id: number;
  title: string;
  description: string;
  done: boolean;
};

export type PartialTask = Omit<Task, "id" | "createdAt" | "done">;

export type TaskList = Task[];
