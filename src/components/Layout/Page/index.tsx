import React from "react";
import type { WrapperProps } from "../../@types";

const Page = ({ children, className }: WrapperProps) => (
  <section className={className}>{children}</section>
);

export default Page;
