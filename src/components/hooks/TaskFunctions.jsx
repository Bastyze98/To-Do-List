import { useState, useEffect } from "react";
import { useToastFunctions } from "./ToastFunctions";

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

  const {
    toastAddedTask,
    toastDeletedTask,
    toastMoveTaskUp,
    toastMoveTaskDown,
    toastEditTask,
    toastCancelEdit,
  } = useToastFunctions();

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim().toLowerCase() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
      toastAddedTask();
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setEditIndex(null);
    toastDeletedTask();
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
      toastMoveTaskUp();
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
      toastMoveTaskDown();
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
      toastEditTask();
    }
  }

  function handleInputKeyDown(e) {
    if (e.key === "Enter" && editIndex === null) {
      addTask();
    }
    if (e.key === "Enter" && editIndex !== null) {
      updateTask();
    }

    if (e.key === "Escape" && editIndex !== null) {
      cancelEdit();
    }
  }

  function cancelEdit() {
    setNewTask("");
    setEditIndex(null);
    toastCancelEdit();
  }

  function deleteAllTasks() {
    setTasks([]);
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
    deleteAllTasks,
  };
}
