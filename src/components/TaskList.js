import React from "react";
import classNames from "classnames";

const TaskList = ({ taskList }) => {
  return (
    <div className="pl-4 pb-4">
      <div className="flex flex-col gap-3 h-[240px] overflow-y-scroll">
        {taskList.map((task) => (
          <div className="border-l-[6px] border-[#7e9fe5] flex justify-between items-center bg-white rounded-md p-4" key={`task-${task.id}`}>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked={task.completed} className="cursor-pointer"/>
              <p className={classNames("", {
                "line-through": task.completed
              })}>{task.title}</p>
            </div>
            <button className="text-gray-600/70">&#x1F5D9;</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
