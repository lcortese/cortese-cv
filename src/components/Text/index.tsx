import React from 'react';

import type { WrapperProps } from '../@types';
import type { FontSizes, FontColors, FontWeights, FontLineHeights } from '../@types';

import * as styles from './styles.module.scss';
import { Elements } from './@types';

export type Props = WrapperProps & {
  element?: `${Elements}`,
  size?: `${FontSizes}`,
  color?: `${FontColors}`,
  weight?: `${FontWeights}`,
  lineHeight?: `${FontLineHeights}`
  capitalize?: boolean,
};

const Text = ({
  children,
  className,
  element: Element = `${Elements.Span}`,
  size,
  color,
  weight,
  lineHeight,
  capitalize = false,
}: Props) => {
  const classNames = [
    styles.text,
    styles[`size-${size}`],
    styles[`color-${color}`],
    styles[`weight-${weight}`],
    styles[`line-height-${lineHeight}`],
    capitalize && 'capitalize',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Element className={classNames}>{children}</Element>
  );
};

export default Text;
