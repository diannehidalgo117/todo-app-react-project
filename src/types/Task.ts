export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "in-progress" | "completed";
  createdAt: string;
}

// Type for creating a new task (without an ID)
export type NewTaskInput = Omit<Task, "id">;
