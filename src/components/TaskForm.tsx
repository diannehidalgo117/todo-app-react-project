const TaskForm = () => {
  // TODO: Add state management for the task form
  // TODO: Add form validation
  // TODO: Add form submission handling

  return (
    // Form Container
    <div className="flex flex-col items-center justify-center max-w-2xl h-min mx-auto bg-rose-100 text-gray-500 font-bold">
      <h1 className="m-2 p-1 text-4xl">Create a new task</h1>
      {/* Form Fields Global Container*/}
      <form className="w-full px-4 py">
        {/* Task Form */}
        <div className="space-y-4">
          {/* Task Title */}
          <div className="flex flex-col gap-3">
            <label htmlFor="title" className="block text-sm font-medium">
              Task Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Enter the task title"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base
                text-gray-900 outline-1 -outline-offset-1 outline-gray-300
                placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2
                focus:outline-red-600 sm:text-sm/6"
            />
          </div>

          {/* Task Description */}
          <div className="flex flex-col gap-3">
            <label htmlFor="title" className="block text-sm font-medium">
              Task Description
            </label>
            <textarea
              id="title"
              name="title"
              placeholder="Enter the details of the task"
              rows={4}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base
                text-gray-900 outline-1 -outline-offset-1 outline-gray-300
                placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2
                focus:outline-red-600 sm:text-sm/6"
            />
          </div>

          {/* Task Due Date */}
          <div className="flex flex-col gap-3">
            <label htmlFor="dueDate" className="text-sm font-medium">
              Due Date
            </label>
            <input
              id="dueDate"
              type="date"
              name="dueDate"
              className="block w-full rounded-md bg-white px-3 py-1.5"
            />
          </div>

          {/* Task Priority */}
          <div className="flex flex-col gap-1">
            <label htmlFor="priority" className="text-sm font-medium">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              className="block w-full rounded-md bg-white px-3 py-1.5"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-rose-400 text-white py-2 rounded-md hover:bg-rose-500"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
