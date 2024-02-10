import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import ButtonX from "./buttons/buttonX";
import PropTypes from "prop-types";

export default function ListItems({
  index,
  task,
  tasks,
  moveTaskUp,
  moveTaskDown,
  startEditing,
  deleteTask,
}) {
  return (
    <li>
      <div className="arrows">
        {index > 0 ? (
          <button
            className="btn move-button"
            onClick={() => {
              moveTaskUp(index);
            }}
          >
            <div className="arrow-icon">
              <FaArrowUp />
            </div>
          </button>
        ) : (
          <ButtonX direction="up" />
        )}
        {index < tasks.length - 1 ? (
          <button
            className="btn move-button"
            onClick={() => {
              moveTaskDown(index);
            }}
          >
            <div className="arrow-icon">
              <FaArrowDown />
            </div>
          </button>
        ) : (
          <ButtonX direction="down" />
        )}
      </div>
      <span
        className="text-title"
        data-tooltip-id="task-tooltip"
        data-tooltip-content={task}
        data-tooltip-place="top"
      >
        {task.length > 15 ? `${task.slice(0, 15)}...` : task}
      </span>
      <Tooltip id="task-tooltip" />
      <div className="edit-delete">
        <button
          className="btn edit-button"
          onClick={() => {
            startEditing(index);
          }}
        >
          <LuPencilLine />
        </button>
        <button
          className="btn delete-button"
          onClick={() => {
            deleteTask(index);
          }}
        >
          <FaRegTrashCan />
        </button>
      </div>
    </li>
  );
}

ListItems.propTypes = {
  index: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  moveTaskUp: PropTypes.func.isRequired,
  moveTaskDown: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
