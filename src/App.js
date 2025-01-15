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
  const [checked, setChecked] = useState(false);

  const handleIsCheckedSwitchToggle = () => {
    setChecked((prev) => !prev);
  };
  return (
    <JotaiProvider>
    <div className="p-4 flex justify-center items-center h-screen">
      <main className="pt-10 pb-4 border border-gray-200/30 w-[500px] grid grid-cols-1 grid-rows-[1fr_auto] rounded-lg bg-gradient-to-t from-[#efe3f4] to-[#eaf7f8]">
        <div className="flex flex-col">
          <Header title="Todo List" description="Add things to do" />
          <div className="h-[2px] bg-[#c7c5c5] mx-4" />
          <Progress percentage={50} />
          <TaskList taskList={taskList} />
          <div className="h-[2px] bg-[#c7c5c5] mx-4" />
          <Switch checked={checked} onChange={handleIsCheckedSwitchToggle} />
        </div>
        <AddTask />
      </main>
    </div>
    </JotaiProvider>
  );
}

export default App;
