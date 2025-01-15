import React from "react";

/**
* 進度條組件：用於顯示任務完成百分比
* @param {number} percentage - 任務完成百分比
 * **/
function Progress ({ percentage = 0 }) {
  return (
    <div className="p-4 flex items-center gap-2">
      <span className="inline-block text-gray-600/70">{percentage}%</span>
      <div className="bg-white rounded-full h-3 flex-1 mr-4">
        <div
          className="h-3 rounded-full transition-color duration-300 ease-in-out bg-[#7e9fe5]"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
};

export default Progress;
