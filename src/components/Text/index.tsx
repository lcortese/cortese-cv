import React from 'react';

import type { WrapperProps , FontColors, FontWeights, FontLineHeights, FontMargins } from '../@types';
import { FontSizes } from '../@types';

import * as styles from './styles.module.scss';
import { Elements } from './@types';

export type Props = WrapperProps & {
  element?: `${Elements}`,
  size?: `${FontSizes}`,
  color?: `${FontColors}`,
  weight?: `${FontWeights}`,
  lineHeight?: `${FontLineHeights}`
  margin?: `${FontMargins}`
  capitalize?: boolean,
};

const Text = ({
  children,
  className,
  element: Element = Elements.Span,
  size = FontSizes.Md,
  color,
  weight,
  lineHeight: paramLineHeight,
  margin,
  capitalize = false,
}: Props) => {
  const lineHeight = paramLineHeight || size;

  const classNames = [
    styles.text,
    styles[`size-${size}`],
    styles[`color-${color}`],
    styles[`weight-${weight}`],
    styles[`line-height-${lineHeight}`],
    styles[`margin-${margin}`],
    capitalize && 'capitalize',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Element className={classNames}>{children}</Element>
  );
};

export default Text;
