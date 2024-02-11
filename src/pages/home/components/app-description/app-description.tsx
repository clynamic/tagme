import { Link } from "react-router-dom";
import "./app-description.scss";

export const AppDescription = () => {
  return (
    <section className="app-description">
      <p>
        TagMe! is a comprehensive utility designed to make resolving large-scale
        tagging projects quick and easy.
      </p>
      <p>
        To begin, <Link to="/auth/login">log in</Link> using your e621 username
        and API key, which you can find on your{" "}
        <a href="https://e621.net/users/home" target="_blank">
          user page
        </a>
        . Then, select one of the latest projects below, or look for the one you
        need via the search bar above. When resolving a project, follow the{" "}
        <a href="https://e621.net/help/tagging_checklist" target="_blank">
          tagging guidelines
        </a>{" "}
        to the best of your ability. If you are unsure of which option to pick,
        ask the question in{" "}
        <a href="https://e621.net/static/discord" target="_blank">
          Discord
        </a>
        , or simply skip it and move on to the next image.
      </p>
      <p>
        Do not forget that any changes you make are done in your name, and are
        thus your responsibility. Vandalism will not be tolerated.
      </p>
    </section>
  );
};
