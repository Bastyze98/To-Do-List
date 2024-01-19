import { useRef, useState } from "react";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { LuPencilLine } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoSkullOutline } from "react-icons/io5";

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

  const [selectedTasks, setSelectedTasks] = useState([]);

  function toggleTaskSelection(index) {
    setSelectedTasks((prevTask) => {
      const isSelected = prevTask.includes(index);
      if (isSelected) {
        return prevTask.filter((selected) => selected !== index);
      } else {
        return [...prevTask, index];
      }
    });
  }

  function deleteSelectedItems() {
    const updatedTasks = tasks.filter(
      (_, index) => !selectedTasks.includes(index)
    );
    setTasks(updatedTasks);
    setSelectedTasks([]);
  }

  function handleSort(e) {
    e.preventDefault();

    const tasksClone = [...tasks];
    const temp = tasksClone[dragPerson.current];
    tasksClone[dragPerson.current] = tasksClone[draggedOverPerson.current];
    tasksClone[draggedOverPerson.current] = temp;
    setTasks(tasksClone);
  }

  function deleteAllTasks() {
    setTasks([]);
    setSelectedTasks([]);
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
          <input
            type="checkbox"
            checked={selectedTasks.includes(index)}
            onChange={() => toggleTaskSelection(index)}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="arrows">
            <button
              className="btn move-button"
              onClick={() => {
                moveTaskUp(index);
              }}
            >
              <SlArrowUp className="arrow-icon" />
            </button>
            <button
              className="btn move-button"
              onClick={() => {
                moveTaskDown(index);
              }}
            >
              <SlArrowDown className="arrow-icon" />
            </button>
          </div>
          <span className="text">{task}</span>
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
      ))}
      {selectedTasks.length > 0 && (
        <button className="btn delete-button" onClick={deleteSelectedItems}>
          Delete Selected Items
        </button>
      )}
      {tasks.length > 1 && (
        <button
          className="btn delete-button"
          onClick={deleteAllTasks}
          disabled={tasks.length === 0}
        >
          <IoSkullOutline />
        </button>
      )}
    </ol>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  moveTaskUp: PropTypes.func.isRequired,
  moveTaskDown: PropTypes.func.isRequired,
};

export default TaskList;
