import type { AnchorHTMLAttributes } from "react";
import classnames from "classnames";
import React from "react";

import type { Props as TextProps } from "../Text";

import * as textStyles from "../Text/styles.module.scss";
import * as styles from "./styles.module.scss";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<TextProps, "size" | "color" | "weight">;

const Link = ({ children, className, size, color, weight, ...rest }: Props) => (
  <a
    className={classnames(
      textStyles.text,
      textStyles[`size-${size}`],
      textStyles[`color-${color}`],
      textStyles[`weight-${weight}`],
      styles.link,
      className,
    )}
    {...rest}
  >
    {children}
  </a>
);

export default Link;
