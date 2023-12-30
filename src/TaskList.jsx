import PropTypes from "prop-types";

const TaskList = ({
  tasks,
  startEditing,
  deleteTask,
  moveTaskUp,
  moveTaskDown,
}) => {
  return (
    <ol>
      {tasks.map((task, index) => (
        <li key={index}>
          <span className="text">{task}</span>
          <button className="edit-button" onClick={() => startEditing(index)}>
            Edit
          </button>
          <button className="delete-button" onClick={() => deleteTask(index)}>
            Delete
          </button>
          <button className="move-button" onClick={() => moveTaskUp(index)}>
            👆
          </button>
          <button className="move-button" onClick={() => moveTaskDown(index)}>
            👇
          </button>
        </li>
      ))}
    </ol>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  startEditing: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  moveTaskUp: PropTypes.func.isRequired,
  moveTaskDown: PropTypes.func.isRequired,
};

export default TaskList;
