import React, { useState } from "react";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
    status: "pending"
  });

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
  // TODO: Add form validation

  // TODO: Add form submission handling
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Task submitted:", task);
    // TODO: Add the task to your tasks state/storage

    // Reset the form
    setTask({
      title: "",
      description: "",
      dueDate: "",
      priority: "low",
      status: "pending"
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

        {/* Two-column layout for date and priority */}
        <div className="grid grid-cols-2 gap-4">
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
