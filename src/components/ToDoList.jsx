import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTaskFunctions } from "./hooks/TaskFunctions";
import ButtonRedirect from "./buttons/ButtonRedirect";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import Form from "../form/Form";
import "../styles/styles.css";

function ToDoListPage() {
  const {
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
  } = useTaskFunctions();

  return (
    <div className="to-do-list">
      <div className="title-btn-redirect">
        <h1 className="title">To-Do-List</h1>
      </div>
      <TaskInput
        value={newTask}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        addTask={addTask}
        updateTask={updateTask}
        editIndex={editIndex}
        onSubmit={editIndex !== null ? updateTask : addTask}
        cancelEdit={cancelEdit}
        tasks={tasks}
        deleteAllTasks={deleteAllTasks}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        newTask={newTask}
        startEditing={startEditing}
        deleteTask={deleteTask}
        moveTaskUp={moveTaskUp}
        moveTaskDown={moveTaskDown}
      />
      <ButtonRedirect />
    </div>
  );
}

export default function ToDoList() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDoListPage />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </Router>
  );
}
