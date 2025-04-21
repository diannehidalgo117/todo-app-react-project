const TaskItem = () => {
  // TODO: Add edit, delete, and done functionality

  return (
    <div
      className="relative flex flex-col my-6 bg-white shadow-sm border
       border-slate-200 hover:border-slate-300 hover:shadow-md
       rounded-lg transition-all w-96"
    >
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex-1 mr-4">
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              Learn Rust
            </h5>
            <p className="text-slate-600 leading-normal font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              fringilla, nunc id facilisis commodo, ligula augue suscipit enim,
              vitae vulputate felis eros nec erat.
            </p>
            <h3 className="mt-2 text-sm text-slate-700">
              Due Date: 07/11/2025
            </h3>
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
