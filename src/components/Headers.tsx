import UserIcon from "../assets/user-icon.png";

const Headers = () => {
  return (
    // Global Container
    <div className="flex flex-row items-center justify-between w-full h-16 space-x-1.5 bg-rose-400 text-white font-bold">
      {/*Logo Name*/}
      <div className="m-2 text-xl"> My Todo App </div>
      {/* User Icon */}
      <span>
        <img
          src={UserIcon}
          alt="User Icon"
          className="h-15 w-15  mr-3 p-1.5 rounded-full"
        />
      </span>
    </div>
  );
};

export default Headers;
