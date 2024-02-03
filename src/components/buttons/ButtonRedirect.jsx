import "./button.css";
import { Link } from "react-router-dom";

function ButtonRedirect() {
  return (
    <div className="stylish-container">
      <Link className="stylish-link" to="/TanStackTable">
        REDIRECT
      </Link>
    </div>
  );
}

export default ButtonRedirect;
