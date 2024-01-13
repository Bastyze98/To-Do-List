import { useRef } from "react";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { LuPencilLine } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import PropTypes from "prop-types";

const TaskList = ({
  tasks,
  setTasks,
  startEditing,
  deleteTask,
  moveTaskUp,
  moveTaskDown,
}) => {
  const dragPerson = useRef(0);
  const draggedOverPerson = useRef(0);
  function handleSort() {
    const tasksClone = [...tasks];
    const temp = tasksClone[dragPerson.current];
    tasksClone[dragPerson.current] = tasksClone[draggedOverPerson.current];
    tasksClone[draggedOverPerson.current] = temp;
    setTasks(tasksClone);
  }

  return (
    <ol>
      {tasks.map((task, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => {
            dragPerson.current = index;
          }}
          onDragEnter={() => {
            draggedOverPerson.current = index;
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDragEnd={handleSort}
        >
          <div className="arrows">
            <button
              className="btn move-button"
              onClick={() => moveTaskUp(index)}
            >
              <SlArrowUp className="arrow-icon" />
            </button>
            <button
              className="btn move-button"
              onClick={() => moveTaskDown(index)}
            >
              <SlArrowDown className="arrow-icon" />
            </button>
          </div>
          <span className="text">{task}</span>
          <div className="edit-delete">
            <button
              className="btn edit-button"
              onClick={() => startEditing(index)}
            >
              <LuPencilLine />
            </button>
            <button
              className="btn delete-button"
              onClick={() => deleteTask(index)}
            >
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
  setTasks: PropTypes.array.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  moveTaskUp: PropTypes.func.isRequired,
  moveTaskDown: PropTypes.func.isRequired,
};

export default TaskList;
