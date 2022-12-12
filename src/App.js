import "./styles.css";
import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TaskList";
import React, { useState } from "react";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="App">
      <h1>James' Task List</h1>
      <NewTask setTaskList={setTaskList} />
      {taskList.map((x) => (
        <TaskList
          key={x.id}
          id={x.id}
          value={x.value}
          setTaskList={setTaskList}
        />
      ))}
    </div>
  );
}
