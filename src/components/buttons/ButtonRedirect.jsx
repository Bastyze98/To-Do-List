import "./button.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ButtonRedirect(props) {
  return (
    <div className="stylish-container">
      <Link className="stylish-link" to={props.page}>
        {props.name}
      </Link>
    </div>
  );
}

export default ButtonRedirect;

ButtonRedirect.propTypes = {
  page: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
