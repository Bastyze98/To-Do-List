import { LuPencilLine } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { IoIosUndo } from "react-icons/io";

import PropTypes from "prop-types";

const TaskInput = ({
  value,
  onChange,
  onKeyDown,
  onSubmit,
  editIndex,
  cancelEdit,
}) => {
  return (
    <div className="input-buttons">
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  editIndex: PropTypes.number,
  cancelEdit: PropTypes.func,
};

export default TaskInput;
