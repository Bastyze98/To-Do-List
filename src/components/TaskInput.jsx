import DeleteAllTasks from "./buttons/DeleteAllTasks";
import { LuPencilLine } from "react-icons/lu";
import { IoIosUndo } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import PropTypes from "prop-types";

const TaskInput = ({
  value,
  onChange,
  onKeyDown,
  onSubmit,
  editIndex,
  cancelEdit,
  tasks,
  deleteAllTasks,
}) => {
  return (
    <div className="input-buttons">
      <DeleteAllTasks tasks={tasks} deleteAllTasks={deleteAllTasks} />
      <input
        type="text"
        placeholder="Enter a task..."
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={editIndex !== null ? "edit-mode" : "add-mode"}
      />
      <div className="update-cancel">
        <button
          className={editIndex !== null ? "btn edit-button" : "btn add-button"}
          onClick={onSubmit}
        >
          {editIndex !== null ? <LuPencilLine /> : <IoMdAdd />}
        </button>
        {editIndex !== null && (
          <button className="btn cancel-button" onClick={cancelEdit}>
            <IoIosUndo />
          </button>
        )}
      </div>
    </div>
  );
};

TaskInput.propTypes = {
  deleteAllTasks: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  editIndex: PropTypes.number,
  cancelEdit: PropTypes.func,
};

export default TaskInput;
