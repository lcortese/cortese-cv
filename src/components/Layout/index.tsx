import type { LegacyRef } from "react";
import React, { forwardRef } from "react";
import type { WrapperProps } from "../@types";

import * as styles from "./styles.module.scss";

const Layout = ({ children }: WrapperProps, ref: LegacyRef<HTMLDivElement>) => (
  <main className={styles.layout} ref={ref}>
    {children}
  </main>
);

export default forwardRef<HTMLDivElement, WrapperProps>(Layout);
