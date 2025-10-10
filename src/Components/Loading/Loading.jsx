import React from "react";
import { FaSpinner } from "react-icons/fa6";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <FaSpinner className="animate-spin text-4xl text-[#5CE1E6]" />
      <p className="ml-3 text-lg text-gray-600 font-medium">Loading...</p>
    </div>
  );
};

export default Loading;
