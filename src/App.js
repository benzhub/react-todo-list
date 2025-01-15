import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Progress from "./components/Progress";
import Switch from "./components/Switch";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { useAtom } from "jotai";
import { taskListAtom } from "./store/TaskListAtom";
import { Provider as JotaiProvider } from "jotai";

function App() {
  const [taskList, setTaskList] = useAtom(taskListAtom);
  const [isSortedByCompleted, setIsSortedByCompleted] = useState(false);

  const handleAddTask = (task) => {
    setTaskList((prev) => [...prev, task]);
  };

  const handleDeleteTask = (taskId) => {
    setTaskList((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleUpdateTaskStatus = (taskId) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleIsCheckedSwitchToggle = () => {
    setIsSortedByCompleted((prev) => !prev);
  };

  const percentage = Math.floor(
    taskList.length === 0
      ? 0
      : (taskList.filter((task) => task.isCompleted).length / taskList.length) *
          100
  );

  const sortedTaskList = isSortedByCompleted
    ? [
        ...taskList.filter((task) => !task.isCompleted),
        ...taskList.filter((task) => task.isCompleted),
      ]
    : taskList;

  return (
    <JotaiProvider>
      <div className="flex h-[100dvh] sm:p-4 sm:justify-center sm:items-center">
        <main className="border border-gray-200/30 w-[500px] grid grid-cols-1  rounded-lg bg-gradient-to-t from-[#efe3f4] to-[#eaf7f8]">
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
    </JotaiProvider>
  );
}

export default App;
