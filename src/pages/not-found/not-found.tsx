import { Link } from "react-router-dom";
import { Page, PageTitle } from "../../components";
import "./not-found.scss";

export const NotFoundPage = () => {
  return (
    <Page>
      <PageTitle>404 - TagMe!</PageTitle>
      <div className="not-found-title">404</div>
      <div className="not-found-subtitle">
        You have ventured too far into the unknown. <Link to="/">Return</Link>
      </div>
    </Page>
  );
};
