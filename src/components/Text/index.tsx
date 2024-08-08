import React from "react";
import classnames from 'classnames';

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
      styles.text,
      styles[`size-${size}`],
      styles[`color-${color}`],
      styles[`weight-${weight}`],
      styles[`line-height-${lineHeight}`],
      styles[`margin-${margin}`],
      capitalize && "capitalize",
      className,
    )}
  >{children}</Element>
);

export default Text;
