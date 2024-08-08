import React from "react";
import classnames from 'classnames';

import type { WrapperProps, FontSizes, FontColors } from "../@types";

import Text from "../Text";
import * as styles from "./styles.module.css";

export type Props = WrapperProps & {
  size?: `${FontSizes}`;
  color?: `${FontColors}`;
};

const Icon = ({ className, ...rest }: Props) => (
  <Text
    element="i"
    className={classnames(
      styles.icon,
      className
    )}
    lineHeight="xs"
    {...rest}
  />
);

export default Icon;
