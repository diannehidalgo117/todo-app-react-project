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
    <div className="w-full bg-gradient-to-r from-rose-50 to-rose-100 rounded-lg shadow-sm">
      <div className="p-4">
        <h3 className="text-xl font-bold text-rose-600 mb-4 text-center md:text-left">
          Task Statistics
        </h3>

        <div className="flex flex-wrap justify-center md:justify-between gap-4">
          {/* Completed tasks */}
          <div className="flex-1 min-w-[240px] flex items-center p-4 bg-white shadow-sm rounded-xl border border-rose-200 transition-all hover:shadow-md">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-700">Completed</h4>
              <p className="text-3xl font-bold text-gray-900">
                {completedTasks}
              </p>
            </div>
          </div>

          {/* Pending tasks */}
          <div className="flex-1 min-w-[240px] flex items-center p-4 bg-white shadow-sm rounded-xl border border-rose-200 transition-all hover:shadow-md">
            <div className="rounded-full bg-yellow-100 p-3 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-700">Pending</h4>
              <p className="text-3xl font-bold text-gray-900">{pendingTasks}</p>
            </div>
          </div>

          {/* Tasks created */}
          <div className="flex-1 min-w-[240px] flex items-center p-4 bg-white shadow-sm rounded-xl border border-rose-200 transition-all hover:shadow-md">
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-700">Total</h4>
              <p className="text-3xl font-bold text-gray-900">{tasksCreated}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
