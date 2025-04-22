import { Dispatch, SetStateAction, useState } from "react";
import { Task } from "../types/Task";
import TaskItem from "./TaskItem";
import TaskEditModal from "./TaskEditModal";

interface TaskListProps {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  isFiltered?: boolean;
  onClearFilter?: () => void;
}

const TaskList = ({
  tasks,
  setTasks,
  isFiltered = false,
  onClearFilter
}: TaskListProps) => {
  // State for task editing
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // State for filtering by status
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Handle task deletion
  const handleDelete = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Handle task status change (mark as done)
  const handleStatusChange = (
    id: number,
    status: "pending" | "in-progress" | "completed"
  ) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  // Handle task editing
  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  // Handle saving edited task
  const handleSaveEdit = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
  };

  // Handle closing edit modal
  const handleCloseEdit = () => {
    setEditingTask(null);
  };

  // Filter tasks by status if needed
  const filteredTasks = tasks.filter((task) => {
    if (statusFilter === "all") return true;
    if (statusFilter === "active") return task.status !== "completed";
    if (statusFilter === "completed") return task.status === "completed";
    return true;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 overflow-y-auto max-h-screen">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-rose-600">
          {isFiltered ? "Filtered Tasks" : "My Tasks"}
        </h2>

        <div className="flex space-x-2">
          {isFiltered && onClearFilter && (
            <button
              onClick={onClearFilter}
              className="bg-rose-100 hover:bg-rose-200 text-rose-700 text-sm py-1 px-3 rounded-md transition-colors"
            >
              Clear Filter
            </button>
          )}

          <button
            onClick={() => setStatusFilter("all")}
            className={`text-sm py-1 px-3 rounded-md transition-colors
              ${
                statusFilter === "all"
                  ? "bg-rose-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter("active")}
            className={`text-sm py-1 px-3 rounded-md transition-colors
              ${
                statusFilter === "active"
                  ? "bg-rose-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
          >
            Active
          </button>
          <button
            onClick={() => setStatusFilter("completed")}
            className={`text-sm py-1 px-3 rounded-md transition-colors
              ${
                statusFilter === "completed"
                  ? "bg-rose-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Task items grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            priority={task.priority}
            status={task.status}
            createdAt={task.createdAt}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>

      {/* No tasks message */}
      {filteredTasks.length === 0 && (
        <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
          <p className="text-center text-gray-500">
            {isFiltered
              ? "No tasks due for this date"
              : statusFilter !== "all"
              ? `No ${statusFilter} tasks available`
              : "No tasks available"}
          </p>
          <p className="text-center text-gray-400 text-sm mt-1">
            {isFiltered
              ? "Try selecting a different date or clear the filter"
              : "Add a new task to get started!"}
          </p>
        </div>
      )}

      {/* Edit Modal */}
      {editingTask && (
        <TaskEditModal
          task={editingTask}
          onClose={handleCloseEdit}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default TaskList;
