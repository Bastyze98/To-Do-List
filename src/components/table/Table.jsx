import buttonStyle from "./modal.module.css";
import styles from "./table.module.css";
import { useEffect, useState } from "react";
import Modal from "./Modal";

import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

function Table() {
  useEffect(() => {
    document.title = "Table";
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles["table-wrapper"]}>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Page</th>
            <th className={styles["expand"]}>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Home</td>
            <td>This is the main page</td>
            <td>
              <span className={`${styles.label} ${styles.labelLive}`}>
                Live
              </span>
            </td>
            <td>
              <span className={styles["actions"]}>
                <BsFillTrashFill className={styles["delete-btn"]} />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
          <tr>
            <td>Page 2</td>
            <td>This is the second page</td>
            <td>
              <span className={`${styles.label} ${styles.labelDraft}`}>
                Draft
              </span>
            </td>
            <td>
              <span className={styles["actions"]}>
                <BsFillTrashFill className={styles["delete-btn"]} />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
          <tr>
            <td>Page 3</td>
            <td>This is the third page</td>
            <td>
              <span className={`${styles.label} ${styles.labelError}`}>
                Draft
              </span>
            </td>
            <td>
              <span className={styles["actions"]}>
                <BsFillTrashFill className={styles["delete-btn"]} />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className={buttonStyle["btn-form"]}
        onClick={() => setModalOpen(true)}
      >
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default Table;
