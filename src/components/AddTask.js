import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * 新增任務組件：用於新增任務
 * @param {function} onAddTask - 新增任務的回調函數
 * **/
function AddTask({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleSubmitAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    onAddTask({ id: uuidv4(), title: task, isCompleted: false });
    setTask("");
  };

  return (
    <form className="p-4" onSubmit={handleSubmitAddTask}>
      <p className="text-gray-600/70">Add to list</p>
      <div className="flex gap-1">
        <input
          type="text"
          className="w-full p-2 rounded-md border border-gray-200/30 focus:outline-none focus:ring-2 focus:ring-[#7e9fe5]"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
          title="Please enter a task"
          placeholder=""
        />
        <button
          className="bg-indigo-500/80 py-2 px-4 rounded-md clicked:scale-95 transition-all duration-200"
          onClick={handleSubmitAddTask}
        >
          <span className="text-white text-2xl font-bold">&#43;</span>
        </button>
      </div>
    </form>
  );
}

export default AddTask;
