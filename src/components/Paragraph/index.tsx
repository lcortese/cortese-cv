import React from "react";

import type { Props as TextProps } from "../Text";

import Text from "../Text";
import { FontSizes } from "../@types";

type Props = Omit<TextProps, "element">;

const Paragraph = ({
  size = `${FontSizes.Md}`,
  lineHeight,
  margin: paramMargin,
  className,
  children,
  ...restProps
}: Props) => {
  const classNames = [className].filter(Boolean).join(" ");
  const margin = paramMargin || size;

  return (
    <Text
      element="p"
      size={size}
      lineHeight={lineHeight}
      margin={margin}
      className={classNames}
      {...restProps}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
