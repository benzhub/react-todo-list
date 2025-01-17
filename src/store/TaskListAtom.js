import atomWithLocalForage from "./atomWithLocalForage";

const devTaskList = [
  { id: 1, title: "Task 1", isCompleted: false },
  { id: 2, title: "Task 2", isCompleted: true },
  { id: 3, title: "Task 3", isCompleted: false },
  { id: 4, title: "Task 4", isCompleted: true },
  { id: 5, title: "Task 5", isCompleted: false },
  { id: 6, title: "Task 6", isCompleted: true },
  { id: 7, title: "Task 7", isCompleted: false },
  { id: 8, title: "Task 8", isCompleted: true },
  { id: 9, title: "Task 9", isCompleted: false },
  { id: 10, title: "Task 10", isCompleted: true },
];

const initTaskList = process.env.NODE_ENV === "development" ? devTaskList : [];

export const taskListAtom = atomWithLocalForage("taskList", initTaskList);
