import { PageTitle } from "./page-title";
import "./page.scss";

export interface PageProps {
  children: React.ReactNode;
  title?: string;
}

/**
 * Standard page layout for content.
 */
export const Page = ({ children, title }: PageProps) => {
  return (
    <main className="page">
      <PageTitle>{title}</PageTitle>
      {children}
    </main>
  );
};
