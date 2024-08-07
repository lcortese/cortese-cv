import React from "react";
import type { WrapperProps } from "../@types";

import * as styles from "./styles.module.scss";

const Layout = ({ children }: WrapperProps) => (
  <main className={styles.layout}>{children}</main>
);

export default Layout;
