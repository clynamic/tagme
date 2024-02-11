import "./page.scss";

export interface PageProps {
  children: React.ReactNode;
}

/**
 * Standard page layout for content.
 */
export const Page = ({ children }: PageProps) => {
  return <main className="page">{children}</main>;
};
