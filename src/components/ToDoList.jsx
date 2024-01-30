import { useTaskFunctions } from "./hooks/TaskFunctions";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import ButtonRedirect from "./buttons/ButtonRedirect";
import "../styles/styles.css";

export default function ToDoList() {
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
  } = useTaskFunctions();

  return (
    <>
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
      </div>
      <ButtonRedirect />
    </>
  );
}
