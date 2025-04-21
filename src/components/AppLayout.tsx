import { ReactNode } from "react";

interface AppLayoutProps {
  header?: ReactNode;
  greetings?: ReactNode;
  calendar?: ReactNode;
  taskForm?: ReactNode;
  taskList?: ReactNode;
  taskStats?: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  header,
  greetings,
  calendar,
  taskForm,
  taskList,
  taskStats
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header area - outside the main container for full width */}
      <div className="w-full">{header}</div>

      {/* Main content container */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Greetings - Full width */}
          <div className="col-span-1 md:col-span-2">{greetings}</div>

          {/* Calendar - Left Side */}
          <div className="md:col-span-1">{calendar}</div>

          {/* Task Form - Right Side */}
          <div className="md:col-span-1">{taskForm}</div>

          {/* Task List - Full width below */}
          <div className="col-span-1 md:col-span-2">{taskList}</div>

          {/* Task Stats - Full width at bottom */}
          <div className="col-span-1 md:col-span-2 mt-4">{taskStats}</div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
