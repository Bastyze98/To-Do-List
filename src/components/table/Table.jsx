import { useEffect, useState } from "react";
import styles from "./table.module.css";
import Modal from "./Modal";

import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

function Table() {
  useEffect(() => {
    document.title = "Table";
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
    { page: "Page 1", description: "This is the first page", status: "live" },
    { page: "Page 2", description: "This is the second page", status: "draft" },
    { page: "Page 3", description: "This is the third page", status: "error" },
  ]);

  const handleDeleteRow = (targetIndex) => {
    setRows(
      rows.filter((_, idx) => {
        return idx !== targetIndex;
      })
    );
  };

  const handleSubmit = (newRow) => {
    setRows([...rows, newRow]);
  };

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
          {rows.map((row, idx) => {
            const statusText =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);
            return (
              <tr key={idx}>
                <td>{row.page}</td>
                <td className={styles["expand"]}>{row.description}</td>
                <td>
                  <span
                    className={`${styles["label"]} ${
                      styles[`label-${row.status}`]
                    }`}
                  >
                    {statusText}
                  </span>
                </td>
                <td>
                  <span className={styles["actions"]}>
                    <BsFillTrashFill
                      className={styles["delete-btn"]}
                      onClick={() => handleDeleteRow(idx)}
                    />
                    <BsFillPencilFill />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles["btn-container"]}>
        <button
          className={styles["btn-form"]}
          onClick={() => setModalOpen(true)}
        >
          Add
        </button>
      </div>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default Table;
