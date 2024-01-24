import { LuPencilLine } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import PropTypes from "prop-types";

export default function ListItems({
  index,
  task,
  moveTaskUp,
  moveTaskDown,
  startEditing,
  deleteTask,
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div {...attributes} {...listeners} ref={setNodeRef} style={style}>
      <li>
        <div className="arrows">
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
    </div>
  );
}

ListItems.propTypes = {
  index: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  moveTaskUp: PropTypes.func.isRequired,
  moveTaskDown: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
