import React from 'react';

import type { Props as TextProps } from '../Text';

import * as styles from './styles.module.scss';
import Text from '../Text';
import { getLineHeight } from '../helpers/getLineHeight';
import { FontSizes } from '../@types';

type Props = Omit<TextProps, "element">;

const Paragraph = ({
  size = `${FontSizes.S3}`,
  lineHeight: paramLineHeight,
  className,
  children,
  ...restProps
}: Props) => {
  const classNames = [
    styles.paragraph,
    className
  ].filter(Boolean).join(' ');

  const lineHeight = paramLineHeight || getLineHeight(size);

  return (
    <Text
      element="p"
      size={size}
      lineHeight={lineHeight}
      className={classNames}
      {...restProps}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
