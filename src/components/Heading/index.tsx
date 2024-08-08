import React from "react";

import type { Props as TextProps } from "../Text";

import type { FontSizes } from "../@types";
import { FontWeights, Headings } from "../@types";
import Text from "../Text";

const parseSize = (value: `${Headings}`) => {
  if (value === "h1") return "xl";
  if (value === "h2") return "lg";
  if (value === "h3") return "md";
  if (value === "h4") return "sm";
  if (value === "h5") return "xs";
};

const getLineHeight = (value: `${FontSizes}`) => {
  if (value === "xs") return "xl";
  if (value === "sm") return "lg";
  if (value === "md") return "md";
  if (value === "lg") return "sm";
  if (value === "xl") return "xs";
};

type Props = Omit<TextProps, "element"> & {
  type?: `${Headings}`;
};

const Heading = ({
  type = `${Headings.H1}`,
  size: sizeParams,
  weight = `${FontWeights.Normal}`,
  lineHeight: lineHeightParams,
  margin: paramMargin,
  className,
  children,
  ...restProps
}: Props) => {
  const size = sizeParams || parseSize(type);
  const lineHeight =
    lineHeightParams || (size ? getLineHeight(size) : undefined);
  const margin = paramMargin || (size ? getLineHeight(size) : undefined);

  return (
    <Text
      element={type}
      size={size}
      weight={weight}
      lineHeight={lineHeight}
      margin={margin}
      className={className}
      {...restProps}
    >
      {children}
    </Text>
  );
};

export default Heading;
