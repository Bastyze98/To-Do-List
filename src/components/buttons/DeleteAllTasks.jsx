import { IoSkullOutline } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import PropTypes from "prop-types";
import "./deleteAllTasks.css";

const DeleteAllTasks = (props) => {
  return (
    <div className="delete-all-container">
      <button
        className="delete-all-tasks"
        onClick={() => props.deleteAllTasks()}
        disabled={props.tasks.length <= 1}
        data-tooltip-id="buttonDeleteAll"
        data-tooltip-content={
          props.tasks.length > 1
            ? "Delete All Tasks"
            : "Required at least 2 tasks to Delete All!"
        }
        data-tooltip-place="top"
      >
        <IoSkullOutline size={24} />
      </button>
      <Tooltip id="buttonDeleteAll" />
    </div>
  );
};

DeleteAllTasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteAllTasks: PropTypes.func.isRequired,
};

export default DeleteAllTasks;
