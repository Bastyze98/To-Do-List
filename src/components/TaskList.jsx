import ListItems from "./ListItems";
import PropTypes from "prop-types";

export default function TaskList({
  tasks,
  setTasks,
  startEditing,
  deleteTask,
  moveTaskUp,
  moveTaskDown,
}) {
  return (
    <ol>
      {tasks.map((task, index) => (
        <ListItems
          key={index}
          index={index}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          startEditing={startEditing}
          deleteTask={deleteTask}
          moveTaskUp={moveTaskUp}
          moveTaskDown={moveTaskDown}
        />
      ))}
    </ol>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  moveTaskUp: PropTypes.func.isRequired,
  moveTaskDown: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
