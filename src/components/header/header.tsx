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
          <a href="/projects" className="header-link">
            All Projects
          </a>
          {isPrivileged && (
            <a href="/projects/new" className="header-link">
              New Project
            </a>
          )}
          <a href="/users" className="header-link">
            Users
          </a>
          <a href="/comments" className="header-link">
            Comments
          </a>
        </div>
        <div className="nav-auth">
          {isLoggedIn ? (
            <>
              <a href={`/users/${userID}`} className="header-link">
                {username}
              </a>
              <a href="/auth/logout" className="header-link" id="logout-link">
                Logout
              </a>
            </>
          ) : (
            <a href="/auth/login" className="header-link header-right">
              Login
            </a>
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
