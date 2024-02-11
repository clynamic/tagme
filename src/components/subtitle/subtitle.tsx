import { ReactNode } from "react";
import "./subtitle.scss";

export const Subtitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="subtitle">{children}</h3>;
};
