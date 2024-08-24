import React from "react";
import classnames from "classnames";
import type { WrapperProps } from "../../@types";

import * as styles from "./styles.module.scss";

const Header = ({ className, children }: WrapperProps) => (
  <header className={classnames(styles.header, className)}>{children}</header>
);

export default Header;
