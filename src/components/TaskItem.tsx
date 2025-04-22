import React from "react";
import { formatToDisplayDate } from "../utils/dateUtils";

interface TaskItemProps {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "in-progress" | "completed";
  createdAt: string;
}

const TaskItem = ({
  title,
  description,
  dueDate,
  priority,
  status,
  createdAt
}: TaskItemProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow">
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
