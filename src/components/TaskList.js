import React, { useState } from "react";

export const TaskList = ({ id, value, setTaskList }) => {
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState("");

  const handleChange = ({ target }) => {
    setUpdate(target.value);
  };

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    toggleEdit();
    setUpdate(value);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setUpdate("");
    toggleEdit();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setTaskList((tasks) => tasks.filter((task) => task.id !== id));
    toggleEdit();
  };

  const handleSave = (e) => {
    e.preventDefault();
    setTaskList((tasks) =>
      tasks.map((task) => (task.id === id ? { value: update, id: id } : task))
    );
    toggleEdit();
  };

  return (
    <form>
      <br />
      {edit ? (
        <>
          <input onChange={handleChange} value={update}></input>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <input value={value} readOnly></input>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </form>
  );
};
