import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./error-icon.scss";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export const ErrorIcon = ({ error }: { error: unknown }) => {
  return (
    <div className="error">
      <div className="error-icon">
        <FontAwesomeIcon icon={faTriangleExclamation} />
      </div>
      <p>{String(error)}</p>
    </div>
  );
};
