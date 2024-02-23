import info from "../icons/info_2.png";
import PropTypes from "prop-types";

const InfoModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <img src={info} alt="info" />
        <div className="modalRight">
          <div className="content">
            <p className="modal-description">
              My application offers a seamless and intuitive experience for
              managing your tasks and to-do lists. Stay organized and productive
              with features designed to help you prioritize, edit, and track
              your tasks effortlessly.
            </p>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary" onClick={onClose}>
              <span className="bold">OK</span>, understood.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;

InfoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};
