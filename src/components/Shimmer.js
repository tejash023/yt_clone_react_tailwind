import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-wrap sm:flex-row sm:items-start">
      {Array(10)
        .fill()
        .map((e, index) => (
          <div className="p-2 m-2 w-72 rounded animate-pulse">
            <div class="h-32 rounded-lg bg-gray-300"></div>
            <div class="space-y-3 mt-2">
              <div class="h-3 rounded-lg bg-gray-300"></div>
              <div class="h-3 rounded-lg bg-gray-300"></div>
              <div class="h-3 w-3/4 rounded-lg bg-gray-300"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
