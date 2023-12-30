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
        {editIndex !== null ? "Update" : "Add"}
      </button>
      {editIndex !== null && (
        <button className="cancel-button" onClick={cancelEdit}>
          Cancel
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
