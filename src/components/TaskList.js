import React from "react";
import classNames from "classnames";
import Checkbox from "./Checkbox";

function TaskList({ taskList }) {
  return (
    <div className="pb-4">
      <div className="flex flex-col gap-3 h-[260px] overflow-y-scroll px-4">
        {taskList.map((task) => (
          <div
            className="border-l-[6px] border-[#7e9fe5] flex justify-between items-center bg-white rounded-md p-4"
            key={`task-${task.id}`}
          >
            <div className="flex items-center gap-2">
              <Checkbox checked={task.completed} onChange={() => {}} />
              <p
                className={classNames("", {
                  "line-through": task.completed,
                })}
              >
                {task.title}
              </p>
            </div>
            <button className="text-gray-500 font-bold">&#x2715;</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
