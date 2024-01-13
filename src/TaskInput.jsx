import { SlPlus } from "react-icons/sl";
import { LuPencilLine } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
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
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={editIndex !== null ? "edit-mode" : "add-mode"}
      />
      <button
        className={editIndex !== null ? "edit-button" : "add-button"}
        onClick={onSubmit}
      >
        {editIndex !== null ? <LuPencilLine /> : <SlPlus />}
      </button>
      {editIndex !== null && (
        <button className="cancel-button" onClick={cancelEdit}>
          <MdOutlineCancel />
        </button>
      )}
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
