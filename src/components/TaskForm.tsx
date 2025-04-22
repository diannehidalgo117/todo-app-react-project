import React, { useState, useEffect } from "react";
import { NewTaskInput } from "../types/Task";
import { formatToYYYYMMDD } from "../utils/dateUtils";

interface TaskFormProps {
  onAddTask: (task: NewTaskInput) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [task, setTask] = useState<NewTaskInput>({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
    status: "pending",
    createdAt: formatToYYYYMMDD(new Date()) // YYYY-MM-DD format
  });

  // Update createdAt when the component mounts
  useEffect(() => {
    setTask((prevTask) => ({
      ...prevTask,
      createdAt: formatToYYYYMMDD(new Date())
    }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(task);

    // Reset the form
    setTask({
      title: "",
      description: "",
      dueDate: "",
      priority: "low",
      status: "pending",
      createdAt: formatToYYYYMMDD(new Date()) // Keep current date after reset
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-rose-600 mb-4">Create New Task</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
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
            value={task.title}
            onChange={handleChange}
            placeholder="What needs to be done?"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
              text-gray-900 placeholder:text-gray-400 focus:border-rose-500
              focus:outline-none focus:ring-1 focus:ring-rose-500"
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
            value={task.description}
            onChange={handleChange}
            placeholder="Add details about this task..."
            rows={3}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
              text-gray-900 placeholder:text-gray-400 focus:border-rose-500
              focus:outline-none focus:ring-1 focus:ring-rose-500"
          />
        </div>

        {/* Three-column layout for date, priority, and creation date */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              value={task.dueDate}
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
              value={task.priority}
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

          {/* Task Creation Date - Read Only */}
          <div className="space-y-2">
            <label
              htmlFor="createdAt"
              className="block text-sm font-medium text-gray-700"
            >
              Creation Date
            </label>
            <input
              id="createdAt"
              type="date"
              name="createdAt"
              value={task.createdAt}
              readOnly
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                text-gray-500 bg-gray-50 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-rose-500 py-2 px-4 text-white font-medium
            rounded-md hover:bg-rose-600 transition-colors focus:outline-none
            focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
