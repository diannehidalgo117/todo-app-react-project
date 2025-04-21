interface TaskItemProps {
  id?: number;
  title?: string;
  description?: string;
  dueDate?: string;
  priority?: string;
  status?: string;
}

const TaskItem = ({ title, description, dueDate }: TaskItemProps) => {
  // TODO: Add edit, delete, and done functionality

  return (
    <div
      className="relative flex flex-col my-6 bg-white shadow-sm border
       border-slate-200 hover:border-slate-300 hover:shadow-md
       rounded-lg transition-all w-full"
    >
      <div className="p-4 w-full">
        <div className="flex justify-between">
          <div className="flex-1 mr-4">
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              {title}
            </h5>
            <p className="text-slate-600 leading-normal font-light">
              {description}
            </p>
            <h3 className="mt-2 text-sm text-slate-700">Due Date: {dueDate}</h3>
          </div>

          <div className="flex flex-col space-y-2">
            <button className="px-3 py-1 bg-pink-500 text-white text-sm rounded-md hover:bg-pink-600">
              Edit
            </button>
            <button className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600">
              Delete
            </button>
            <button className="px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
