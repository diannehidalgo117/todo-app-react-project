import { useEffect, useState } from "react";

interface TaskStatsProps {
  tasks: Array<{
    id: number;
    status: string;
  }>;
}

const TaskStats = ({ tasks = [] }: TaskStatsProps) => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [tasksCreated, setTasksCreated] = useState(0);

  useEffect(() => {
    // Count different task types whenever tasks array changes
    const complete = tasks.filter((task) => task.status === "completed").length;
    const pending = tasks.filter(
      (task) => task.status === "pending" || task.status === "in-progress"
    ).length;
    const created = tasks.length;

    setCompletedTasks(complete);
    setPendingTasks(pending);
    setTasksCreated(created);
  }, [tasks]);

  return (
    <div className="flex flex-wrap items-center justify-center w-full py-6 space-x-4 bg-rose-50 rounded-lg">
      {/* Completed tasks */}
      <div className="flex flex-col items-center p-4 bg-white shadow-sm rounded-xl border border-rose-100 w-64">
        <h4 className="text-lg font-semibold text-rose-600">Completed Tasks</h4>
        <p className="text-4xl font-bold text-gray-800 mt-2">
          {completedTasks}
        </p>
      </div>

      {/* Pending tasks */}
      <div className="flex flex-col items-center p-4 bg-white shadow-sm rounded-xl border border-rose-100 w-64">
        <h4 className="text-lg font-semibold text-rose-600">Pending Tasks</h4>
        <p className="text-4xl font-bold text-gray-800 mt-2">{pendingTasks}</p>
      </div>

      {/* Tasks created */}
      <div className="flex flex-col items-center p-4 bg-white shadow-sm rounded-xl border border-rose-100 w-64">
        <h4 className="text-lg font-semibold text-rose-600">Tasks Created</h4>
        <p className="text-4xl font-bold text-gray-800 mt-2">{tasksCreated}</p>
      </div>
    </div>
  );
};

export default TaskStats;
