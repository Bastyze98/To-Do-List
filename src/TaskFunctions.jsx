import { useState, useEffect } from "react";

export function useTaskFunctions() {
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
    if (newTask.trim().toLowerCase() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(e, index) {
    e.stopPropagation();
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setEditIndex(null);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
      setEditIndex(null);
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
      setEditIndex(null);
    }
  }

  function startEditing(e, index) {
    e.stopPropagation();
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
    if (e.key === "Enter" && editIndex === null) {
      addTask();
    }
    if (e.key === "Enter" && editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setEditIndex(null);
      setNewTask("");
    }

    if (e.key === "Escape" && editIndex !== null) {
      cancelEdit();
    }
  }

  function cancelEdit() {
    setNewTask("");
    setEditIndex(null);
  }

  return {
    tasks,
    setTasks,
    newTask,
    editIndex,
    handleInputChange,
    addTask,
    deleteTask,
    moveTaskUp,
    moveTaskDown,
    startEditing,
    updateTask,
    handleInputKeyDown,
    cancelEdit,
  };
}
