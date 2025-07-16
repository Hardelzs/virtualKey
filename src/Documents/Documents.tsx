import { Loader } from "lucide-react";
import type React from "react";

const Documents: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-black w-full flex flex-col">
      {/* Header Section */}
      <div className="w-full max-w-4xl mx-auto mt-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
          {/* Loader Box 1 */}
          <div className="bg-red-300 flex items-center justify-center p-4 rounded-lg shadow-lg w-full md:w-auto">
            <Loader />
          </div>
          {/* Loader Box 2 with Input */}
          <div className="bg-red-300 flex items-center gap-4 p-4 rounded-lg shadow-lg w-full md:w-auto">
            <Loader />
            <input
              type="text"
              placeholder="Ask or search"
              className="border-none outline-none bg-transparent px-2 py-1 w-full md:w-48"
            />
          </div>
        </div>
        
      </div>
      <hr className="mt-3  border-[#363535] w-[100%]" />
      {/* Add more content here */}
    </div>
  );
};

export default Documents;