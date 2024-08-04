import React from "react";
import type { WrapperProps } from "../../@types";

const Page = ({ children }: WrapperProps) => (
  <section>{children}</section>
);

export default Page;
