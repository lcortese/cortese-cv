import React from "react";
import classnames from "classnames";
import type { ButtonHTMLAttributes } from "react";

import * as styles from "./styles.module.scss";
import type { FontSizes } from "../@types";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: `${FontSizes}`;
  styleType?: "link";
};

const Button = ({ children, className, size, styleType, ...rest }: Props) => (
  <button
    className={classnames(
      styles.button,
      styles[`size--${size}`],
      styles[`style-type--${styleType}`],
      className,
    )}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
