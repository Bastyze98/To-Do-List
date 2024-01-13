import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { LuPencilLine } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
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
          <div className="arrows">
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              <SlArrowUp className="arrow-icon" />
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              <SlArrowDown className="arrow-icon" />
            </button>
          </div>
          <span className="text">{task}</span>
          <div className="edit-delete">
            <button className="edit-button" onClick={() => startEditing(index)}>
              <LuPencilLine />
            </button>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              <FaRegTrashCan />
            </button>
          </div>
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
