import React from 'react';

import type { Props as TextProps } from '../Text';

import * as styles from './styles.module.scss';
import { Headings } from '../@types';
import { getLineHeight } from '../helpers/getLineHeight';
import Text from '../Text';

const parseSize = (value: `${Headings}`) => {
  if (value === 'h1') return "6";
  if (value === 'h2') return "5";
  if (value === 'h3') return "4";
  if (value === 'h4') return "3";
  if (value === 'h5') return "2";
  if (value === 'h6') return "1";
}

type Props = Omit<TextProps, "element"> & {
  type?: `${Headings}`,
};

const Heading = ({
  type = `${Headings.H1}`,
  size: sizeParams,
  lineHeight: lineHeightParams,
  className,
  children,
  ...restProps
}: Props) => {

  const size = sizeParams || parseSize(type);
  const lineHeight = lineHeightParams || (size ? getLineHeight(size) : undefined);

  const classNames = [
    styles.heading,
    className
  ].filter(Boolean).join(' ');

  return (
    <Text
      element={type}
      size={size}
      lineHeight={lineHeight}
      className={classNames}
      {...restProps}
    >
      {children}
    </Text>
  );
};

export default Heading;
