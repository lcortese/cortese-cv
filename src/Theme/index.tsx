import { useEffect } from "react";
import type { WrapperProps } from "../components/@types";

import "./custom-properties.scss";
import "./reset.css";
import "./font-face.css";
import "./styles.css";

const Theme = ({ children }: WrapperProps) => {
  useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://kit.fontawesome.com/6cb71a685b.js";
    scriptElement.crossOrigin = "anonymous";
    document.head.appendChild(scriptElement);
  }, []);

  return children;
};

export default Theme;
