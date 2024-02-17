import styles from "./modal.module.css";

function Modal({ closeModal }) {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={styles["modal-container"]} onClick={handleClick}>
      <div className={styles["modal"]}>
        <form>
          <div className={styles["form-group"]}>
            <label htmlFor="page">Page</label>
            <input name="page" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="description">Description</label>
            <textarea name="description" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="status">Status</label>
            <input name="status" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="status">Status</label>
            <select name="status">
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          <button type="submit" className={styles["btn"]}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
