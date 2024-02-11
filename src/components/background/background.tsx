import { ReactNode, useEffect, useRef } from "react";
import { ThemeColor, useTheme } from "../../context";
import trianglify from "trianglify";
import "./background.scss";

export interface IBackgroundProps {
  children: ReactNode;
}

const palette: Record<ThemeColor, string[]> = {
  dawn: ["#D89840", "#7D4735"],
  dusk: ["#0c2032", "#2c3e50"],
};

export const Background = ({ children }: IBackgroundProps) => {
  const { theme } = useTheme();
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    const generatePattern = () => {
      const seed = Math.random();
      const colors = palette[theme.color];

      const pattern = trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        variance: 1,
        cell_size: 75,
        seed: seed,
        x_colors: false,
        y_colors: colors,
      });

      const svgElement = pattern.svg();
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgElement);
      const patternSvg = `url('data:image/svg+xml;utf8,${encodeURIComponent(
        svgString
      )}')`;

      if (!styleRef.current) {
        styleRef.current = document.createElement("style");
        styleRef.current.type = "text/css";
        document.head.appendChild(styleRef.current);
        styleRef.current.innerHTML = `
          .background {
            background: ${patternSvg};
          }
        `;
      }
    };

    window.addEventListener("resize", generatePattern);
    generatePattern();

    return () => {
      window.removeEventListener("resize", generatePattern);
      if (styleRef.current && document.head.contains(styleRef.current)) {
        document.head.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, [theme.color]);

  return <div className="background">{children}</div>;
};
