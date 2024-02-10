import { ImBlocked } from "react-icons/im";
import { Tooltip } from "react-tooltip";
import PropTypes from "prop-types";
import "./buttonX.css";

function ButtonX(props) {
  const tooltipContent =
    props.direction === "up" ? "Can't move Task up!" : "Can't move Task down!";

  return (
    <button
      className="button-X"
      data-tooltip-id="blocked"
      data-tooltip-content={tooltipContent}
      data-tooltip-place="top"
    >
      <div className="arrow-icon">
        <ImBlocked />
      </div>
      <Tooltip id="blocked" />
    </button>
  );
}

export default ButtonX;

ButtonX.propTypes = {
  direction: PropTypes.string.isRequired,
};
