import { useEffect } from "react";

/**
 * Adjusts the document title to the given string.
 */
export const PageTitle = ({ children }: { children: string }) => {
  useEffect(() => {
    document.title = children;
  });
  return null;
};
