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
    { page: "[page-name]", description: "[description]", status: "error" },
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(
      rows.filter((_, idx) => {
        return idx !== targetIndex;
      })
    );
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
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
                    <BsFillPencilFill onClick={() => handleEditRow(idx)} />
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
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default Table;
