import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { useTaskFunctions } from "./TaskFunctions";
import "./styles.css";

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
          newTask={newTask}
          startEditing={startEditing}
          deleteTask={deleteTask}
          moveTaskUp={moveTaskUp}
          moveTaskDown={moveTaskDown}
        />
      </div>
    </>
  );
}
