import { useState, useRef } from "react";
import { formatToDisplayDate } from "../utils/dateUtils";
import { Task } from "../types/Task";

interface TaskItemProps {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "in-progress" | "completed";
  createdAt: string;
  onEdit?: (task: Task) => void;
  onDelete?: (id: number) => void;
  onStatusChange?: (
    id: number,
    status: "pending" | "in-progress" | "completed"
  ) => void;
}

const TaskItem = ({
  id,
  title,
  description,
  dueDate,
  priority,
  status,
  createdAt,
  onEdit,
  onDelete,
  onStatusChange
}: TaskItemProps) => {
  // State for animations
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Create a task object to pass to edit handler
  const task: Task = {
    id,
    title,
    description,
    dueDate,
    priority,
    status,
    createdAt
  };

  // Handle delete animation
  const handleDeleteClick = () => {
    if (onDelete) {
      if (confirm("Are you sure you want to delete this task?")) {
        setIsDeleting(true);
        // Wait for animation to complete before actual deletion
        setTimeout(() => {
          onDelete(id);
        }, 300); // Animation duration
      }
    }
  };

  // Handle status change with animation
  const handleMarkAsDone = () => {
    if (onStatusChange) {
      setIsCompleting(true);
      // Apply the status change but keep animation state
      onStatusChange(id, "completed");
      // Reset animation state after a delay
      setTimeout(() => {
        setIsCompleting(false);
      }, 1000);
    }
  };

  // Animation classes based on state
  const animationClasses = () => {
    if (isDeleting) return "animate-fade-out";
    if (isCompleting) return "animate-pulse";
    if (status === "completed") return "border-green-300 bg-green-50";

    return "hover:shadow-md";
  };

  return (
    <div
      ref={cardRef}
      className={`bg-white border border-gray-200 rounded-lg shadow-sm p-5
        transition-all duration-300 animate-slide-up ${animationClasses()}`}
    >
      {/* Header Container */}
      <div className="flex flex-wrap gap-2 justify-between items-start mb-3">
        {/* Task title */}
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1 flex-grow">
          {title}
        </h3>

        {/* Task priority and status badges */}
        <div className="flex gap-2">
          {/* Priority badge */}
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
            ${
              priority === "high"
                ? "bg-red-100 text-red-800"
                : priority === "medium"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {priority}
          </span>

          {/* Status badge */}
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
            ${
              status === "completed"
                ? "bg-blue-100 text-blue-800"
                : status === "in-progress"
                ? "bg-purple-100 text-purple-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Middle Container - Description */}
      {description && (
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
      )}

      {/* Action Buttons Container */}
      <div className="flex justify-end space-x-2 mb-3">
        {/* Edit Button */}
        <button
          onClick={() => onEdit && onEdit(task)}
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600
            transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={isDeleting}
        >
          Edit
        </button>

        {/* Delete Button */}
        <button
          onClick={handleDeleteClick}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600
            transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          disabled={isDeleting}
        >
          Delete
        </button>

        {/* Mark as Done Button - Only show if not already completed */}
        {status !== "completed" && (
          <button
            onClick={handleMarkAsDone}
            className="px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600
              transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            disabled={isDeleting || isCompleting}
          >
            Done
          </button>
        )}
      </div>

      {/* Divider line */}
      <hr className="my-3 border-gray-100" />

      {/* Bottom Container - Dates */}
      {/* Due date */}
      <div className="flex flex-wrap justify-between items-center pt-1 text-xs">
        {dueDate && (
          <div className="text-gray-600">
            <span className="font-medium mr-1">Due:</span>
            <span>{formatToDisplayDate(dueDate)}</span>
          </div>
        )}

        {/* Created date */}
        <div className="text-gray-500">
          <span className="font-medium mr-1">Created:</span>
          <span>{formatToDisplayDate(createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
