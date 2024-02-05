import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function useToastFunctions() {
  function toastAddedTask() {
    toast.success("Task Added!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function toastDeletedTask() {
    toast.error("Task Deleted!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function toastMoveTaskUp() {
    toast.warn("Task Moved Up!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function toastMoveTaskDown() {
    toast.warn("Task Moved Down!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function toastEditTask() {
    toast.info("Task Edited!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function toastCancelEdit() {
    toast.info("Edit Canceled!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return {
    toastAddedTask,
    toastDeletedTask,
    toastMoveTaskUp,
    toastMoveTaskDown,
    toastEditTask,
    toastCancelEdit,
  };
}
