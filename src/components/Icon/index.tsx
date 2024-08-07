import React from "react";

import type { WrapperProps, FontSizes, FontColors } from "../@types";

import Text from "../Text";
import * as styles from "./styles.module.css";

export type Props = WrapperProps & {
  size?: `${FontSizes}`;
  color?: `${FontColors}`;
};

const Icon = ({ className, ...rest }: Props) => {
  const classNames = [styles.icon, className].filter(Boolean).join(" ");
  return <Text element="i" className={classNames} lineHeight="xs" {...rest} />;
};

export default Icon;
