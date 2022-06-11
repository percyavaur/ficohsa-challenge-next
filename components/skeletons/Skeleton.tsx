import React from "react";
import { FaStar } from "react-icons/fa";

const Skeleton = () => {
  return (
    <div>
      <div className="border border-gray-400 shadow-md rounded-md max-w-md p-4 relative animate-pulse bg-gray-50">
        <div className="flex flex-row pb-6 space-x-2">
          <div className="max-w-xs">
            <div className="h-4 bg-gray-400 rounded w-36 mb-1"></div>
            <div className="h-4 bg-gray-400 rounded w-36 mb-4"></div>
            <div className="">
              <div className="h-4 bg-gray-400 rounded mb-1"></div>
              <div className="h-4 bg-gray-400 rounded mb-1"></div>
              <div className="h-4 bg-gray-400 rounded mb-1"></div>
              <div className="h-4 bg-gray-400 rounded w-5/6"></div>
            </div>
          </div>
          <div className="bg-gray-400 h-40 w-32"></div>
        </div>
        <div className="flex flex-row items-center space-x-1 absolute left-2 bottom-2">
          <FaStar color="gray" />
          <div className="h-4 bg-gray-400 rounded w-10"></div>
        </div>
        <div className="absolute right-2 bottom-2 font-semibold text-blue-500 self-end">
          <div className="h-4 bg-gray-400 rounded w-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
