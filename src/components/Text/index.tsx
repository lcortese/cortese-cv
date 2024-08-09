import React from "react";
import classnames from "classnames";

import type {
  WrapperProps,
  FontSizes,
  FontColors,
  FontWeights,
  FontLineHeights,
  FontMargins,
} from "../@types";

import * as styles from "./styles.module.scss";
import { Elements } from "./@types";

export type Props = WrapperProps & {
  element?: `${Elements}`;
  size?: `${FontSizes}`;
  color?: `${FontColors}`;
  weight?: `${FontWeights}`;
  lineHeight?: `${FontLineHeights}`;
  margin?: `${FontMargins}`;
  capitalize?: boolean;
};

const Text = ({
  children,
  className,
  element: Element = Elements.Span,
  size,
  color,
  weight,
  lineHeight,
  margin,
  capitalize = false,
}: Props) => (
  <Element
    className={classnames(
      styles[`text--size-${size}`],
      styles[`text--color-${color}`],
      styles[`text--weight-${weight}`],
      styles[`text--line-height-${lineHeight}`],
      styles[`text--margin-${margin}`],
      capitalize && styles["text--capitalize"],
      className,
    )}
  >
    {children}
  </Element>
);

export default Text;
