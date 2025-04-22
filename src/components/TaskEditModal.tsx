import React, { useState, useEffect } from "react";
import { Task } from "../types/Task";
// import { formatToYYYYMMDD } from "../utils/dateUtils";

interface TaskEditModalProps {
  task: Task | null;
  onClose: () => void;
  onSave: (task: Task) => void;
}

const TaskEditModal = ({ task, onClose, onSave }: TaskEditModalProps) => {
  const [editedTask, setEditedTask] = useState<Task | null>(null);

  // Initialize form when task changes
  useEffect(() => {
    if (task) {
      setEditedTask({ ...task });
    }
  }, [task]);

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (!editedTask) return;

    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedTask) {
      onSave(editedTask);
    }
  };

  // If no task is provided, don't render anything
  if (!task || !editedTask) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden animate-modal">
        <div className="flex justify-between items-center bg-rose-500 text-white px-6 py-4">
          <h3 className="text-lg font-semibold">Edit Task</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 text-xl font-semibold"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Task Title */}
          <div className="space-y-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Task Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={editedTask.title}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                text-gray-900 focus:border-rose-500 focus:outline-none
                focus:ring-1 focus:ring-rose-500"
              required
            />
          </div>

          {/* Task Description */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={editedTask.description}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                text-gray-900 focus:border-rose-500 focus:outline-none
                focus:ring-1 focus:ring-rose-500"
            />
          </div>

          {/* Due Date and Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Task Due Date */}
            <div className="space-y-2">
              <label
                htmlFor="dueDate"
                className="block text-sm font-medium text-gray-700"
              >
                Due Date
              </label>
              <input
                id="dueDate"
                type="date"
                name="dueDate"
                value={editedTask.dueDate}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                  text-gray-900 focus:border-rose-500 focus:outline-none
                  focus:ring-1 focus:ring-rose-500"
              />
            </div>

            {/* Task Priority */}
            <div className="space-y-2">
              <label
                htmlFor="priority"
                className="block text-sm font-medium text-gray-700"
              >
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                value={editedTask.priority}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                  text-gray-900 focus:border-rose-500 focus:outline-none
                  focus:ring-1 focus:ring-rose-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          {/* Task Status */}
          <div className="space-y-2">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={editedTask.status}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                text-gray-900 focus:border-rose-500 focus:outline-none
                focus:ring-1 focus:ring-rose-500"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskEditModal;
