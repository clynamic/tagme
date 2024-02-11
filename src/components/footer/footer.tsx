import { Link } from "react-router-dom";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      Version 2.0.0 | <Link to="/cookies">Cookie Policy</Link> |{" "}
      <Link to="/tos">Terms of Service</Link>
    </footer>
  );
};
