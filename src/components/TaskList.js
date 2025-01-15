import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import Checkbox from "./Checkbox";

/**
* 任務列表組件：用於顯示任務列表
* @param {array} taskList - 任務列表
* @param {function} onDeleteTask - 刪除任務的回調函數
* @param {function} onUpdateTaskStatus - 更新任務完成狀態的回調函數
 * **/
function TaskList({ taskList, onDeleteTask, onUpdateTaskStatus }) {
  const bottomRef = useRef(null);
  const prevLengthRef = useRef(taskList.length);

  useEffect(() => {
    // 只有當任務數量增加時才滾動（新增任務時）
    if (taskList.length > prevLengthRef.current) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    prevLengthRef.current = taskList.length;
  }, [taskList.length]); // 當任務列表長度改變時觸發

  return (
    <div className="pb-4">
      <div className="flex flex-col gap-3 h-[260px] overflow-y-scroll px-4">
        {taskList.map((task) => (
          <div
            className="border-l-[6px] border-[#7e9fe5] flex justify-between items-center bg-white rounded-md p-4"
            key={`task-${task.id}`}
          >
            <div className="flex items-center gap-2">
              <Checkbox checked={task.isCompleted} onChange={() => onUpdateTaskStatus(task.id)} />
              <p
                className={classNames("", {
                  "line-through": task.isCompleted,
                })}
              >
                {task.title}
              </p>
            </div>
            {/* 刪除按鈕 */}
            <button 
              className="text-gray-500 font-bold" 
              onClick={() => onDeleteTask(task.id)}
            >
              &#x2715;
            </button>
          </div>
        ))}
        {/* 用於滾動的空白目標元素 */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default TaskList;
