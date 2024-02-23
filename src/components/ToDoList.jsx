import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTaskFunctions } from "./hooks/TaskFunctions";
import { useEffect, useState } from "react";
import ButtonRedirect from "./buttons/ButtonRedirect";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import Table from "./table/Table";
import Form from "../form/Form";
import "../styles/styles.css";
import InfoModal from "./InfoModal";

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

  useEffect(() => {
    document.title = "To Do List";
  }, []);

  const [openModal, setOpenModal] = useState(false);

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
      <div className="redirect-container">
        <ButtonRedirect name="Form" page="/Form" />
        <button
          className="info"
          onClick={() => {
            openModal ? setOpenModal(false) : setOpenModal(true);
          }}
        >
          Info
        </button>
        <ButtonRedirect name="Table" page="/Table" />
      </div>
      {openModal && (
        <InfoModal open={openModal} onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
}

export default function ToDoList() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDoListPage />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Table" element={<Table />} />
      </Routes>
    </Router>
  );
}
