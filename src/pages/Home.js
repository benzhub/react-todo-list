import Header from "../components/Header";
import TaskList from "../components/TaskList";
import Progress from "../components/Progress";
import Switch from "../components/Switch";
import AddTask from "../components/AddTask";
import { useState } from "react";
import { useAtom } from "jotai";
import { taskListAtom } from "../store/TaskListAtom";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  // 使用 Jotai 來管理任務列表狀態
  const [taskList, setTaskList] = useAtom(taskListAtom);
  // 從 URL 獲取排序狀態
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSortedByCompleted, setIsSortedByCompleted] = useState(
    searchParams.get("sort") === "true"
  );

  // 新增任務函數
  const handleAddTask = (task) => {
    setTaskList((prev) => [...prev, task]);
  };

  // 刪除任務函數
  const handleDeleteTask = (taskId) => {
    setTaskList((prev) => prev.filter((task) => task.id !== taskId));
  };

  // 更新任務完成狀態函數
  const handleUpdateTaskStatus = (taskId) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // 切換排序方式的處理函數
  const handleIsCheckedSwitchToggle = () => {
    setIsSortedByCompleted((prev) => !prev);
    setSearchParams({ sort: (!isSortedByCompleted).toString() });
  };

  // 計算完成任務的百分比（無條件捨去）
  const percentage = Math.floor(
    taskList.length === 0
      ? 0
      : (taskList.filter((task) => task.isCompleted).length / taskList.length) *
          100
  );

  // 根據排序狀態對任務列表進行排序
  const sortedTaskList = isSortedByCompleted
    ? [
        ...taskList.filter((task) => !task.isCompleted), // 未完成的任務
        ...taskList.filter((task) => task.isCompleted),  // 已完成的任務
      ]
    : taskList;

  return (
    <div className="flex h-[100dvh] sm:p-4 sm:justify-center sm:items-center">
      <main className="border border-gray-200/30 w-[500px] grid grid-cols-1 rounded-lg bg-gradient-to-t from-[#efe3f4] to-[#eaf7f8]">
        <div className="flex flex-col">
          <Header title="Todo List" description="Add things to do" />
          <div className="h-[2px] bg-[#c7c5c5] mx-4" />
          <Progress percentage={percentage} />
          <TaskList
            taskList={sortedTaskList}
            onDeleteTask={handleDeleteTask}
            onUpdateTaskStatus={handleUpdateTaskStatus}
          />
          <div className="h-[2px] bg-[#c7c5c5] mx-4" />
          <Switch
            checked={isSortedByCompleted}
            onChange={handleIsCheckedSwitchToggle}
          />
        </div>
        <AddTask onAddTask={handleAddTask} />
      </main>
    </div>
  );
};

export default Home;
