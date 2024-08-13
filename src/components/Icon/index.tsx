import React from "react";
import classnames from "classnames";

import type { FontSizes, FontColors, PresentationalProps } from "../@types";

import Text from "../Text";
import * as styles from "./styles.module.css";

export type Props = PresentationalProps & {
  size?: `${FontSizes}`;
  color?: `${FontColors}`;
};

const Icon = ({ className, ...rest }: Props) => (
  <Text
    element="i"
    className={classnames(styles.icon, className)}
    lineHeight="xs"
    {...rest}
  >
    {""}
  </Text>
);

export default Icon;
