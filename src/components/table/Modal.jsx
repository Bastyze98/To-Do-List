import { useState } from "react";
import styles from "./modal.module.css";
import PropTypes from "prop-types";

function Modal({ closeModal, onSubmit, defaultValue }) {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const [formState, setFormState] = useState(
    defaultValue || {
      page: "",
      description: "",
      status: "",
    }
  );

  const validateForm = () => {
    if (formState.page && formState.description && formState.status) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formState);
    closeModal();
  };

  const [errors, setErrors] = useState("");

  return (
    <div className={styles["modal-container"]} onClick={handleClick}>
      <div className={styles["modal"]}>
        <form>
          <div className={styles["form-group"]}>
            <label htmlFor="page">Page</label>
            <input
              name="page"
              value={formState.page}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              value={formState.description}
              onChange={handleChange}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="status">Status</label>
            <select
              name="status"
              value={formState.status}
              onChange={handleChange}
            >
              <option />
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          {errors && (
            <div className={styles["error"]}>{`Please include: ${errors}`}</div>
          )}
          <button
            type="submit"
            className={styles["btn"]}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  defaultValue: PropTypes.bool.isRequired,
};
