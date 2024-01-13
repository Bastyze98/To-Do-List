import { useEffect, useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import "./styles.css";

export default function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];

    return JSON.parse(localValue);
  });
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks));
  }, [tasks]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setEditIndex(null); // Clear edit mode
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
      console.log(updatedTasks);
      setEditIndex(null); // Clear edit mode
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
      setEditIndex(null); // Clear edit mode
    }
  }

  function startEditing(index) {
    setEditIndex(index);
    setNewTask(tasks[index]);
  }

  function updateTask() {
    if (editIndex !== null && newTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setNewTask("");
      setEditIndex(null);
    }
  }

  function handleInputKeyDown(e) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  function cancelEdit() {
    setNewTask("");
    setEditIndex(null);
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <TaskInput
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          addTask={addTask}
          updateTask={updateTask}
          editIndex={editIndex}
          onSubmit={editIndex !== null ? updateTask : addTask}
          cancelEdit={cancelEdit}
        />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          startEditing={startEditing}
          deleteTask={deleteTask}
          moveTaskUp={moveTaskUp}
          moveTaskDown={moveTaskDown}
        />
      </div>
    </>
  );
}
