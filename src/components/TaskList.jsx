import PropTypes from "prop-types";
import ListItems from "./ListItems";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

export default function TaskList({
  tasks,
  setTasks,
  startEditing,
  deleteTask,
  moveTaskUp,
  moveTaskDown,
}) {
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTasks((tasks) => {
        const activeIndex = tasks.indexOf(active.id);
        const overIndex = tasks.indexOf(over.id);

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }
  };

  return (
    <ol>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((task, index) => (
            <ListItems
              key={index}
              index={index}
              task={task}
              setTasks={setTasks}
              startEditing={startEditing}
              deleteTask={deleteTask}
              moveTaskUp={moveTaskUp}
              moveTaskDown={moveTaskDown}
            />
          ))}
        </SortableContext>
      </DndContext>
    </ol>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  moveTaskUp: PropTypes.func.isRequired,
  moveTaskDown: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
