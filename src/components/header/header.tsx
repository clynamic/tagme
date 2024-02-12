import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeColor, ThemeWidth, useTheme } from "../../context";
import { Search } from "../search";
import "./header.scss";
import {
  faCompressAlt,
  faExpandAlt,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const isLoggedIn = false;
  const isPrivileged = false;
  const userID = null;
  const username = null;

  return (
    <header>
      <div className="header-logo">
        <Link to="/" className="header-logo-link">
          TagMe!
        </Link>
      </div>
      <div className="header-search">{<Search />}</div>

      <nav>
        <div className="nav-main">
          <Link to="/projects" className="header-link">
            All Projects
          </Link>
          {isPrivileged && (
            <Link to="/projects/new" className="header-link">
              New Project
            </Link>
          )}
          <Link to="/users" className="header-link">
            Users
          </Link>
          <Link to="/comments" className="header-link">
            Comments
          </Link>
        </div>
        <div className="nav-auth">
          {isLoggedIn ? (
            <>
              <Link to={`/users/${userID}`} className="header-link">
                {username}
              </Link>
              <Link to="/auth/logout" className="header-link" id="logout-link">
                Logout
              </Link>
            </>
          ) : (
            <Link to="/auth/login" className="header-link header-right">
              Login
            </Link>
          )}
        </div>
      </nav>

      <div className="side-links">
        <a
          id="theme-switch"
          title={`Color: ${theme.color}`}
          onClick={() =>
            setTheme({
              ...theme,
              color: {
                dawn: "dusk",
                dusk: "dawn",
              }[theme.color] as ThemeColor,
            })
          }
        >
          <FontAwesomeIcon
            icon={
              {
                dawn: faSun,
                dusk: faMoon,
              }[theme.color]
            }
          />
        </a>
        <a
          id="mode-switch"
          title={`Width: ${theme.width}`}
          onClick={() =>
            setTheme({
              ...theme,
              width: {
                narrow: "wide",
                wide: "narrow",
              }[theme.width] as ThemeWidth,
            })
          }
        >
          <FontAwesomeIcon
            icon={
              {
                wide: faExpandAlt,
                narrow: faCompressAlt,
              }[theme.width]
            }
          />
        </a>
        {/* Display blacklist-switch based on some condition if needed */}
        {/* <a id="blacklist-switch" title="Blacklist: ON" style={{ display: 'none' }}></a> */}
      </div>
    </header>
  );
};
