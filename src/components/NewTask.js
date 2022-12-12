import React, { useState } from "react";

export const NewTask = ({ setTaskList }) => {
  const [newTask, setNewTask] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleTaskChange = ({ target }) => {
    setNewTask(target.value);
  };

  const handleDescChange = ({ target }) => {
    setNewTask(target.value);
  };

  const handleDateChange = ({ target }) => {
    setNewTask(target.value);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setNewTask("");
    setNewDate("");
    setNewDesc("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList((tasks) => [
      ...tasks,
      {
        value: newTask,
        id: Math.floor(Math.random() * 1000),
        date: newDate,
        description: newDesc
      }
    ]);
    setNewTask("");
  };

  return (
    <form>
      <input
        onChange={handleTaskChange}
        placeholder="Enter New Task"
        value={newTask}
      ></input>
      {newTask.length > 0 ? (
        <>
          <br></br>
          <textarea onChange={handleDescChange}>Task Description</textarea>
          <br></br>
          <input onChange={handleDateChange} type="date"></input>
          <br></br>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <></>
      )}
    </form>
  );
};
